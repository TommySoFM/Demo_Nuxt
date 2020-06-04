<template>
  <div class="filter">
    <div class="filter__container">
      <genre>
        <h3 slot="header"> Maps </h3>
        <template slot="body" slot-scope="props">
          <dragbox :isExpanded="props.isExpanded" :genreData="mapData"/>
        </template>
      </genre>
      <genre>
        <h3 slot="header"> Types </h3>
        <template slot="body" slot-scope="props">
          <dragbox :isExpanded="props.isExpanded" :genreData="typeData"/>
        </template>
      </genre>
      <genre>
        <h3 slot="header"> Elements </h3>
        <template slot="body" slot-scope="props">
          <dragbox :isExpanded="props.isExpanded" :genreData="elementData"/>
        </template>
      </genre>
      <genre>
        <h3 slot="header"> Price </h3>
        <template slot="body" slot-scope="props">
          <slider :isExpanded="props.isExpanded" :maxPrice="maxPrice"/>
        </template>
      </genre>
    </div>
  </div>
</template>
<script>
  import Genre from "~/components/ItemsFilter/FilterGenre";
  import Dragbox from "~/components/ItemsFilter/FilterDragbox";
  import Slider from "~/components/ItemsFilter/FilterSlider"
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
      Slider
    }
  }
</script>
<style scoped lang="scss">
  .filter {
    position: sticky;
    top: 0;
    left: 0;

    &__container {
      position: absolute;
      top: 5vh;
      left: 0;
      width: 30vw;
      display: flex;
      flex-direction: column;
    }
  }
</style>
