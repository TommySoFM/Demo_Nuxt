<template>
    <div class="container h-108 mx-auto my-8 relative overflow-hidden relative"
         @mouseenter="autoplay=false"
         @mouseleave="autoplay=true">
      <client-only>
        <keep-alive>
          <transition :name="carousel">
            <div v-for="(slide, index) in slides" :key="slide.seq" v-if="index === current" class="absolute inset-0">
              <img :src=slide.img alt="Monster Hunter World Slide 1"/>
            </div>
          </transition>
        </keep-alive>
      </client-only>
      <button class="slide-button"> Prev </button>
      <div class="flex z-10 absolute text-white right-3 bottom-2">
        <div v-for="(slide, index) in slides" :key="slide.seq" @click="selectSlide(index)" class="cursor-pointer"> 。 </div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 0,
        carousel: 'carousel-next',
        slides: [
          { 'seq': 0, 'img': '/mhw-slide-1.jpg' },
          { 'seq': 1, 'img': '/mhw-slide-2.jpeg' },
          { 'seq': 2, 'img': '/mhw-slide-3.jpg' }
        ],
        intervalCounter: 0,
        autoplay: true
      }
    },
    computed: {
      totalSlide() {
        return this.slides.length
      }
    },
    mounted() {
      this.setInterval(3000)
    },
    methods: {
      forwardSlide() {
        this.carousel = 'carousel-next'
        this.current < this.totalSlide-1 ? this.current++ : this.current = 0
      },
      backwardSlide() {
        this.carousel = 'carousel-prev'
        this.current > 0 ? this.current-- : this.current = this.totalSlide-1
      },
      setInterval(interval) {
        this.intervalNumber = setInterval(() => {
          if(this.autoplay) this.forwardSlide(false);
        } , interval)
      },
      selectSlide(value) {
        this.current < value ? this.carousel = 'carousel-next' : this.carousel = 'carousel-prev'
        this.current = value
      }
    }
}
</script>
<style scoped>
  .slide-button {
    position: relative;
    top: 40%;
    left: 0;
    width: 5rem;
    height: 3rem;
    border-radius: 20px;
    background-color: white;
  }

  .carousel-prev-enter-active, .carousel-prev-leave-active,
  .carousel-next-enter-active, .carousel-next-leave-active{
    transition: transform 1s ease;
    will-change: transform
  }

  .carousel-next-enter, .carousel-prev-leave-to{
    transform: translateX(100%)
  }

  .carousel-next-leave-to, .carousel-prev-enter{
    transform: translateX(-100%)
  }
</style>
