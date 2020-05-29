<template>
  <div class="monster-container" >
    <div class="monster-container__filter" v-if="position!=null"></div>
    <div class="monster-card" :class="{ 'monster-card__filter': position !== index && position !== null }" v-for="(monster, index) in  monsters" :key="monsters.name" @mouseover="position = index" @mouseout="position = null">
      <img class="monster-card__icon" :src="monster.icon"/>
      <div class="monster-card__name"> {{ monster.name }} </div>
      <div :class="[ monster.discounted != null ? 'monster-card__price-out' : 'monster-card__price']"> ${{ monster.price }} </div>
      <div class="monster-card__discounted" v-if="monster.discounted != null"> ${{ monster.discounted }} </div>
      <button class="monster-card__button" v-show="index === position">Add to Cart</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        position: null
      }
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
    margin: 3rem 1rem;
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
