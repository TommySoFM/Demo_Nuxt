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
    <Code />
    <!-- <Login /> -->
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { mapActions } from 'vuex'
import Carousel from '~/components/Carousel'
import FlexBanner from '~/components/FlexBanner'
import Catalogue from '~/components/Catalogue'
import AddToCartModal from '~/components/AddToCart'
import ShoppingCart from '~/components/Cart/ShoppingCart'
import Login from '~/components/Login/Modal'
import Code from '~/components/Code'

export default {
  layout: 'header',
  components: {
    Carousel,
    FlexBanner,
    Catalogue,
    AddToCartModal,
    ShoppingCart,
    Login,
    Code
  },
  head() {
    return {
      title: 'MH Icon Store'
    }
  },
  methods: {
    ...mapActions({
      selectedCode: 'selectedCode'
    })
  },
  mounted() {
    const vm = this
    gsap.to('.banner', {
      autoAlpha: 99,
      scrollTrigger: {
        trigger: '.banner',
        endTrigger: '.catalogue',
        pin: '.banner',
        pinSpacing: false,
        start: 'top top',
        end: 'top top',
        scrub: 1
      },
      onComplete: () => {
        vm.selectedCode(2)
      }
    })
    gsap.to('.filter', {
      scrollTrigger: {
        trigger: '.catalogue-container',
        pin: '.filter',
        pinSpacing: false,
        start: 'top top'
      },
      onComplete: () => {
        vm.selectedCode(3)
      }
    })

    //   gsap.registerPlugin(ScrollTrigger)
    //   // Section 2 is pinned till Section 3 covers viewport
    //   ScrollTrigger.create({
    //     trigger: '.section-2',
    //     endTrigger: '.section-3',
    //     start: 'top top',
    //     end: 'top top',
    //     pin: '.section-2',
    //     pinSpacing: false,
    //   })
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
    margin-bottom: 85vh;
  }
  .catalogue {
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    border-top: #44957a 1rem solid;
  }
}
</style>
