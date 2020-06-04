<template>
  <div class="monster-container" >
    <div class="monster-container__filter" v-if="position!=null"></div>
    <div class="monster-card" :class="{ 'monster-card__filter': position !== index && position !== null }"
         v-for="(monster, index) in  monsters" :key="monsters.name"
         @mouseover="position = index" @mouseout="position = null">
      <img class="monster-card__icon" :src="monster.icon"/>
      <div class="monster-card__name"> {{ monster.name }} </div>
      <div :class="[ monster.discounted != null ? 'monster-card__price-out' : 'monster-card__price']"> ${{ monster.price }} </div>
      <div class="monster-card__discounted" v-if="monster.discounted != null"> ${{ monster.discounted }} </div>
      <button class="monster-card__button" v-show="index === position" @click="openModal(monster)">Add to Cart</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        position: null
      }
    },
    props:[
      'monsters'
    ],
    methods: {
      ...mapActions({
        openModal: 'openModal'
      })
    }
  }
</script>
<style scoped lang="scss">
  .monster-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    font-family: Roboto, sans-serif;

  }
  .monster-card {
    flex: 1 1 auto;
    max-width: 12rem;
    margin: 1rem 1rem;
    padding: 1rem 20px;
    height: 23rem;
    transition: transform 0.3s ease;

    &:hover {
      border-radius: 10px;
      box-shadow: rgba(127, 130, 139, 0.5) 3px 7px 20px;
      transform: scale(1.1);
    }

    &__filter {
      filter: saturate(70%) blur(.7px);
    }

    &__icon {
      width: 100%;
    }
    &__name {
      font-size: 100%;
      font-weight: 600;
      margin-top: 3rem;
    }
    &__price {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    &__price-out {
      font-size: 80%;
      text-decoration: line-through black solid;
    }
    &__discounted {
      font-size: 110%;
      font-weight: 600;
      color: orangered;
      margin-bottom: 1rem;
    }
    &__button {
      outline: none;
      border: lightslategrey 3px solid;
      border-radius: 20px;
      padding: 5px 20px;
      color: lightslategrey;
      font-weight: 600;
      transition: all .3s ease;
      margin-left: 0.5rem;

      &:hover {
        border-color: #44957a;
        background-color: #44957a;
        color: white;
      }
    }
  }
</style>
