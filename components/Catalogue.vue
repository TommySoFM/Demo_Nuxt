<template>
  <div class="catalogue-container">
    <section-title callName="t-catalogue" parentName="catalogue-container">Products</section-title>
    <SearchFilter
      :mapData="maps"
      :typeData="types"
      :elementData="elements"
      :maxPrice="maxPrice"
      @receiverUpdate="syncData"
      class="filter"
    />
    <Item
      class="catalogue-container__items"
      :monsters="filteredMonster"
      :class="{'expanded': isExpanded}"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Item from '~/components/Item'
import SearchFilter from './ItemsFilter/Filter'
import SectionTitle from './SectionTitle'

export default {
  data() {
    return {
      value: [0, 0],
      typesSelect: [],
      mapsSelect: [],
      elementsSelect: [],
      filteredMonster: [],
      timeoutCounter: 0
    }
  },
  computed: {
    ...mapGetters({
      isExpanded: 'getIsFilterExpanded',
      monsters: 'monsterList/getMonsters'
    }),
    maxPrice() {
      const priceArray = this.monsters.map(monster => {
        return monster.discounted || monster.price
      })
      return Math.ceil(Math.max(...priceArray))
    },
    maps() {
      const collectedArray = this.monsters.map(item => {
        return item['habitat']
      })
      return new Object({
        genre: 'habitat',
        selected: this.mapsSelect,
        all: collectedArray
      })
    },
    types() {
      const collectedArray = this.monsters.map(item => {
        return item['type']
      })
      return new Object({
        genre: 'type',
        selected: this.typesSelect,
        all: collectedArray
      })
    },
    elements() {
      const collectedArray = this.monsters.map(item => {
        return item['element']
      })
      return new Object({
        genre: 'element',
        selected: this.elementsSelect,
        all: collectedArray
      })
    }
  },
  components: {
    Item,
    SearchFilter,
    SectionTitle
  },
  mounted() {
    this.value[1] = this.maxPrice
    this.filteredMonster = this.filterAll()
  },
  watch: {
    // Update 'filteredMonster' Array upon data sync. by event
    mapsSelect() {
      this.filteredMonster = this.filterAll()
    },
    typesSelect() {
      this.filteredMonster = this.filterAll()
    },
    elementsSelect() {
      this.filteredMonster = this.filterAll()
    },
    value() {
      clearTimeout(this.timeoutCounter)
      this.timeoutCounter = setTimeout(() => {
        this.filteredMonster = this.filterAll()
      }, 500)
    }
  },
  methods: {
    // Receive event data + Trigger $watch to filter
    syncData(event) {
      const genre = event.genre
      const data = event.data
      switch (genre) {
        case 'type':
          this.typesSelect = data
          break
        case 'habitat':
          this.mapsSelect = data
          break
        case 'element':
          this.elementsSelect = data
          break
        case 'price':
          this.value = data
          break
      }
    },
    filterByGenre(array, genreArray, genre) {
      const selectedSet = new Set(genreArray)
      if (selectedSet.size > 0) {
        return array.filter(item => {
          return selectedSet.has(item[genre])
        })
      } else {
        return array
      }
    },
    filterByPrice(array) {
      const min = this.value[0]
      const max = this.value[1]
      if (min !== 0 || max !== this.maxPrice) {
        return array.filter(item => {
          const price = item['discounted'] || item['price']
          return price >= min && price <= max
        })
      } else {
        return array
      }
    },
    filterAll() {
      let monsters = this.monsters
      monsters = this.filterByPrice(monsters)
      monsters = this.filterByGenre(monsters, this.mapsSelect, 'habitat')
      monsters = this.filterByGenre(monsters, this.typesSelect, 'type')
      monsters = this.filterByGenre(monsters, this.elementsSelect, 'element')
      return monsters
    }
  }
}
</script>
<style scoped lang="scss">
.catalogue-container {
  height: fit-content;

  &__items {
    min-height: 100vh;
    margin-left: 3rem;
    margin-right: 3rem;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5rem;
    transition: all 0.4s ease 0.1s;
  }
}
.expanded {
  margin-left: 30vw;
  padding: 0;
  transition: all 0.4s ease;
}
.filter {
  transform: translateY(-3.5rem);
}
</style>
