<template>
  <div class="main-container">
    <section class="carousel">
      <carousel />
    </section>
    <section class="banner">
      <flex-banner />
    </section>
    <section class="catalogue">
      <Catalogue />
    </section>

    <AddToCartModal />
    <ShoppingCart />
    <!--    <Login />-->
  </div>
</template>
<script>
import { gsap } from 'gsap'
import Carousel from '~/components/Carousel'
import FlexBanner from '~/components/FlexBanner'
import Catalogue from '~/components/Catalogue'
import AddToCartModal from '~/components/AddToCart'
import ShoppingCart from '~/components/Cart/ShoppingCart'
import Login from '~/components/Login/Modal'

export default {
  layout: 'header',
  components: {
    Carousel,
    FlexBanner,
    Catalogue,
    AddToCartModal,
    ShoppingCart,
    Login
  },
  head() {
    return {
      title: 'MH Icon Store'
    }
  },
  mounted() {
    gsap.to('.banner', {
      scrollTrigger: {
        trigger: '.banner',
        endTrigger: '.catalogue',
        pin: '.banner',
        pinSpacing: false,
        start: 'top top',
        end: 'top top'
      }
    })
    gsap.to('.filter', {
      scrollTrigger: {
        trigger: '.catalogue-container',
        pin: '.filter',
        pinSpacing: false,
        start: 'top top'
      }
    })
  }
}
</script>
<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow-x: hidden;
  background-image: image('~statics/backgrounds/dragon-background.jpg');
  background-size: cover;
  .carousel {
    margin: 3rem 0;
  }
  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 7rem;
  }
  .catalogue {
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
}
</style>
