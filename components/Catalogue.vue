<template>
  <div class="catalogue-container">
    <SearchFilter :mapData="maps" :typeData="types" :elementData="elements" :maxPrice="maxPrice"
                  @receiverUpdate="syncData"/>
    <Item class="catalogue-container__items" :monsters="filteredMonster"/>
  </div>
</template>
<script>
  import Item from "~/components/Item";
  import SearchFilter from './ItemsFilter/Filter'

  export default {
    data() {
      return {
        value: [0, 0],
        typesSelect: [],
        mapsSelect: [],
        elementsSelect: [],
        filteredMonster: [],
        monsters: [
          {
            name: 'Diablos',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/47/MHW-Diablos_Icon.png/revision/latest?cb=20181008232238',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/7/75/MHW-Diablos_Render_001.png/revision/latest?cb=20180201020240',
            type: 'Flying Wyvern',
            element: 'Earth',
            habitat: 'Wildspire Waste',
            price: 3.99,
            discounted: 2.99
          },
          {
            name: 'Black Diablos',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/dc/MHW-Black_Diablos_Icon.png/revision/latest?cb=20181008232237',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/dc/MHW-Black_Diablos_Render_001.png/revision/latest?cb=20180228105958',
            type: 'Flying Wyvern',
            element: 'Earth',
            habitat: 'Wildspire Waste',
            price: 4.99
          },
          {
            name: 'Kirin',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/81/MHW-Kirin_Icon.png/revision/latest?cb=20180129013139',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/f/f5/MHW-Kirin_Render_001.png/revision/latest?cb=20180307103956',
            type: 'Elder Dragon',
            element: 'Thunder',
            habitat: 'Coral Highlands',
            price: 10.99,
            discounted: 8.99
          },
          {
            name: 'Azure Rathalos',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHW-Azure_Rathalos_Icon.png/revision/latest?cb=20181008232237',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/50/MHW-Azure_Rathalos_Render_001.png/revision/latest?cb=20190411144639',
            type: 'Flying Wyvern',
            element: 'Fire',
            habitat: 'Ancient Forest',
            price: 7.99,
            discounted: 7.59
          },
          {
            name: 'Teostra',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/d7/MHW-Teostra_Icon.png/revision/latest?cb=20180129013141',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e0/MHW-Teostra_Render_001.png/revision/latest?cb=20180111134020',
            type: 'Elder Dragon',
            element: 'Fire',
            habitat: 'Coral Highlands',
            price: 12.99,
            discounted: 9.99
          },
          {
            name: 'Lunastra',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e1/MHW-Lunastra_Icon.png/revision/latest?cb=20180708004617',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/f/f8/MHW-Lunastra_Render_001.png/revision/latest?cb=20180530122508',
            type: 'Elder Dragon',
            element: 'Fire',
            habitat: 'Coral Highlands',
            price: 12.99,
            discounted: 9.99
          },
          {
            name: 'Nergigante',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/4c/MHW-Nergigante_Icon.png/revision/latest?cb=20190721071521',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/89/MHW-Nergigante_Render_001.png/revision/latest?cb=20190914060417',
            type: 'Elder Dragon',
            element: 'None',
            habitat: 'Great Ravine',
            price: 10.99
          },
          {
            name: 'Vaal Hazak',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/f/fb/MHW-Vaal_Hazak_Icon.png/revision/latest?cb=20190910185557',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/54/MHW-Vaal_Hazak_Render_001.png/revision/latest?cb=20180214002433',
            type: 'Elder Dragon',
            element: 'None',
            habitat: 'Rotten Vale',
            price: 10.99
          },
          {
            name: 'Ancient Leshen',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/7/71/MHW-Ancient_Leshen_Icon.png/revision/latest?cb=20190215174526',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Ancient_Leshen_Render_001.png/revision/latest?cb=20191126211836',
            type: 'Relict',
            element: 'None',
            habitat: 'Ancient Forest',
            price: 7.99,
            discounted: 4.99
          },
          {
            name: 'Xenojiiva',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e3/MHW-Xeno%27jiiva_Icon.png/revision/latest?cb=20180127022938',
            image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/2f/MHW-Xeno%27jiiva_Render_001.png/revision/latest?cb=20190412154741',
            type: 'Elder Dragon',
            element: 'None',
            habitat: 'Confluence of Fate',
            price: 15.99
          }
        ],
        timeoutCounter: 0
      }
    },
    computed: {
      maxPrice() {
        const priceArray = this.monsters.map(monster => { return monster.discounted || monster.price })
        return Math.ceil(Math.max(...priceArray))
      },
      maps() {
        return this.isOnFilter ?
          this.genreCollection(this.filteredMonster, 'habitat') :
          this.genreCollection(this.monsters, 'habitat')
      },
      types() {
        return this.isOnFilter ?
          this.genreCollection(this.filteredMonster, 'type') :
          this.genreCollection(this.monsters, 'type')
      },
      elements() {
        return this.isOnFilter ?
          this.genreCollection(this.filteredMonster, 'element') :
          this.genreCollection(this.monsters, 'element')
      },
      isOnFilter() {
        return this.typesSelect.length > 0 || this.mapsSelect.length > 0 || this.elementsSelect.length > 0
      }
    },
    components: {
      Item,
      SearchFilter
    },
    watch: {
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
        this.timeoutCounter = setTimeout(() => {this.filteredMonster = this.filterAll()}, 500)
      }
    },
    methods: {
      syncData(event) {
        const genre = event.genre
        const data = event.data
        switch (genre) {
          case 'type':
            this.typesSelect = data
            break;
          case 'habitat':
            this.mapsSelect = data
            break;
          case 'element':
            this.elementsSelect = data
            break;
          case 'price':
            this.value = data
            break;
        }
      },
      filterByGenre(array, genreArray, genre) {
        const selectedSet = new Set(genreArray)
        if (selectedSet.size > 0) {
          return array.filter( item => {
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
          return array.filter( item => {
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
      },
      genreCollection(targetArray, keyword) {
        const collectedArray = targetArray.map( item => { return item[keyword] })
        const sortedArray = [...new Set(collectedArray)].sort()
        return new Object({genre: keyword, data: sortedArray})
      }
    }
  }
</script>
<style scoped lang="scss">
  .catalogue-container {
    height: fit-content;

    &__items {
      min-height: 100vh;
      margin-left: 30vw;
    }
  }
</style>
