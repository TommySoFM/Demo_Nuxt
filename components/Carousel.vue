<template>
  <div class="carousel" @mouseenter="autoplay=false" @mouseleave="autoplay=true">
    <div class="carousel-background">
      <img src="../static/backgrounds/maps-background.jpg" />
      <div class="background-filter" />
    </div>
    <div>
      <transition :name="carousel === 'carousel-next' ? 'prev-forward' : 'prev-backward'">
        <div
          class="slide slide-prev darkening"
          v-for="(slide,  index) in slides"
          :key="slide.seq"
          v-if="index === prevSlide"
        >
          <img :src="slide.img" />
        </div>
      </transition>
      <transition :name="carousel === 'carousel-next' ? 'now-forward' : 'now-backward'">
        <div
          class="slide slide-now"
          v-for="(slide,  index) in slides"
          :key="slide.seq"
          v-if="index === current"
        >
          <img :src="slide.img" />
        </div>
      </transition>
      <transition :name="carousel === 'carousel-next' ? 'next-forward' : 'next-backward'">
        <div
          class="slide slide-next darkening"
          v-for="(slide,  index) in slides"
          :key="slide.seq"
          v-if=" index === nextSlide"
        >
          <img :src="slide.img" />
        </div>
      </transition>
    </div>
    <button class="slide-button prev" @click="backwardSlide">Prev</button>
    <button class="slide-button next" @click="forwardSlide">Next</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      carousel: 'carousel-next',
      slides: [
        { seq: 0, img: '/mhw-slide-1.jpg' },
        { seq: 1, img: '/mhw-slide-2.jpeg' },
        { seq: 2, img: '/mhw-slide-3.jpg' }
      ],
      intervalCounter: 0,
      autoplay: true
    }
  },
  computed: {
    prevSlide() {
      return this.current > 0 ? this.current - 1 : this.totalSlide - 1
    },
    nextSlide() {
      return this.current === this.totalSlide - 1 ? 0 : this.current + 1
    },
    totalSlide() {
      return this.slides.length
    }
  },
  mounted() {
    this.setInterval(5000)
  },
  methods: {
    forwardSlide() {
      this.carousel = 'carousel-next'
      this.current = this.nextSlide
    },
    backwardSlide() {
      this.carousel = 'carousel-prev'
      this.current = this.prevSlide
    },
    setInterval(interval) {
      this.intervalNumber = setInterval(() => {
        if (this.autoplay) this.forwardSlide(false)
      }, interval)
    },
    selectSlide(value) {
      this.current < value
        ? (this.carousel = 'carousel-next')
        : (this.carousel = 'carousel-prev')
      this.current = value
    }
  }
}
</script>
<style scoped lang="scss">
.carousel {
  width: 100vw;
  height: 70vh;
  position: relative;
  overflow: hidden;

  .slide {
    position: absolute;
    width: 60vw;
    height: 50vh;
  }
  .slide-prev {
    top: 10%;
    left: 0;
    transform: translateX(-45vw);
    filter: brightness(70%);
  }
  .slide-now {
    top: 10%;
    left: 20vw;
  }
  .slide-next {
    top: 10%;
    right: 0;
    transform: translateX(45vw);
    filter: brightness(70%);
  }
  .darkening {
    /*&:after {*/
    /*  position: absolute;*/
    /*  top: 0;*/
    /*  left: 0;*/
    /*  content: '';*/
    /*  width: 100%;*/
    /*  height: 120%;*/
    /*  background-color: rgba(43, 40, 40, 0.7);*/
    /*  z-index: 10;*/
    /*  transition: all .5s ease;*/
    /*}*/
  }
  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 95%;
    overflow: hidden;
    filter: brightness(40%);
  }
}
.slide-button {
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(222, 217, 217, 0.7);
  color: white;
  font-weight: 800;
  outline: none;
}
.prev {
  top: 50%;
  left: 9%;
}
.next {
  top: 50%;
  left: 86%;
}

.prev-backward-enter-active,
.prev-backward-leave-active {
  transition: all 0.5s ease;
}
.prev-backward-enter {
  transform: translateX(-105vw) !important;
}
.prev-backward-leave-to {
  left: 20vw !important;
  transform: translateX(0) !important;
}

.now-backward-leave-active {
  transition: all 0.5s ease;
}
.now-backward-leave-to {
  transform: translateX(65vw) !important;
}
.now-backward-enter-active {
  transition: all 0s 0.5s;
}
.now-backward-enter {
  opacity: 0;
}

.next-backward-leave-active {
  transition: all 0.5s ease;
}
.next-backward-leave-to {
  transform: translateX(105vw) !important;
}
.next-backward-enter-active {
  transition: all 0s 0.5s;
}
.next-backward-enter {
  opacity: 0;
}

.prev-forward-leave-active {
  transition: all 0.5s ease;
}
.prev-forward-leave-to {
  transform: translateX(-105vw) !important;
}
.prev-forward-enter-active {
  transition: all 0s 0.5s;
}
.prev-forward-enter {
  opacity: 0;
}

.now-forward-leave-active {
  transition: all 0.5s ease;
}
.now-forward-leave-to {
  left: 0 !important;
  transform: translateX(-45vw) !important;
}
.now-forward-enter-active {
  transition: all 0s 0.45s;
}
.now-forward-enter {
  opacity: 0;
}

.next-forward-leave-active,
.next-forward-enter-active {
  transition: all 0.5s ease;
}
.next-forward-leave {
  left: 40% !important;
  transform: translateX(0) !important;
}
.next-forward-leave-to {
  left: 20vw !important;
  transform: translateX(0) !important;
}
.next-forward-enter {
  transform: translateX(105vw) !important;
}
</style>
