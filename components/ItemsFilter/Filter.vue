<template>
  <div class="filter">
    <CartFrame direction="set-left" sequence="4" style="position: relative !important;" @toggle="syncStatus">
      <template slot="title"> Filter </template>
      <template slot="body" >
        <transition-group name="slide">
          <genre v-for="filter in filters" :key="filter.name" v-if="selectedFilter === 'All' || selectedFilter === filter.name" :filter="filter.name">
            <template slot="header"> {{ filter.name }} </template>
            <template slot="body" slot-scope="props">
              <slider :isExpanded="props.isExpanded" :maxPrice="maxPrice" v-if="filter.name === 'Price'"/>
              <dragbox :isExpanded="props.isExpanded" :genreData="filter.data" v-else/>
            </template>
          </genre>
        </transition-group>
      </template>
    </CartFrame>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import Genre from "~/components/ItemsFilter/FilterGenre";
  import Dragbox from "~/components/ItemsFilter/FilterDragbox";
  import Slider from "~/components/ItemsFilter/FilterSlider"
  import CartFrame from "~/components/Cart/CartFrame";
  export default {
    props: [
      'mapData',
      'typeData',
      'elementData',
      'maxPrice'
    ],
    components: {
      Genre,
      Dragbox,
      Slider,
      CartFrame
    },
    computed: {
      ...mapGetters({
        'selectedFilter': 'getSelectedFilter'
      }),
      // For v-for loop in 'Genre' component above //
      filters() {
        return  [
          { name: 'Maps', data: this.mapData},
          { name: 'Types', data: this.typeData},
          { name: 'Elements', data: this.elementData},
          { name: 'Price', data: this.maxPrice}
        ]
      }
    },
    methods: {
      ...mapActions({
        selectFilter: 'selectFilter'
      }),
      // Return panel to 'All' when tag collapsed //
      syncStatus(value) {
        if(!value) {
          this.selectFilter('All')
        }
      }
    }
  }
</script>
<style lang="scss">
  .filter {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
  }

  @for $i from 1 through 10 {
    .genre:nth-child(#{$i}n) {
      top: #{$i *7 - 3}rem;
    }
  }

  @for $i from 1 through 10 {
    .slide-enter-active:nth-child(#{$i}n), .slide-leave-active:nth-child(#{$i}n) {
      transition-delay: #{$i *0.1}s;
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s ease;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(-10rem);
    opacity: 0;
  }
  .slide-enter-to, .slide-leave {
    transform: translateX(0);
    opacity: 100%;
  }
</style>
