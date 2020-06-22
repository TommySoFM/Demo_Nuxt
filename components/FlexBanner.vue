<template>
  <div class="banner-container w-full flex flex-col">
    <img class="banner-background" src="../static/backgrounds/dragon-background.jpg" />
    <section-title callName="t-banner" parentName="banner-container">Best Sellers</section-title>
    <div class="blocker" v-if="!loaded" />
    <div class="h-108 slides-container" @mouseleave="cursorPosition=null">
      <div
        v-for="(monster, index) in monsters"
        :key="`monster-${index}`"
        class="banner-slide"
        @mouseover="cursorPosition=index"
      >
        <div class="slide-off">
          <div class="character-filter" v-if="index !== cursorPosition">
            <h3 class="text-off">{{ monster.name }}</h3>
          </div>
          <transition name="character-off">
            <img :src="monster.icon" class="character-image-off" v-if="index !== cursorPosition" />
          </transition>
        </div>

        <div class="slide-on">
          <div class="character-filter" style="background: none">
            <transition name="fade">
              <h3 class="text-on" v-if="index === cursorPosition">{{ monster.name }}</h3>
            </transition>
          </div>
          <transition name="character-on">
            <img :src="monster.icon" class="character-image-on" v-if="index === cursorPosition" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { mapActions } from 'vuex'
import SectionTitle from './SectionTitle'
export default {
  data() {
    return {
      monsters: [
        {
          name: 'Azure Rathalos',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/8/8e/MHW-Azure_Rathalos_Icon.png/revision/latest?cb=20181008232237'
        },
        {
          name: 'Kirin',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/8/81/MHW-Kirin_Icon.png/revision/latest?cb=20180129013139'
        },
        {
          name: 'Nergigante',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/4/4c/MHW-Nergigante_Icon.png/revision/latest?cb=20190721071521'
        },
        {
          name: 'Lunastra',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e1/MHW-Lunastra_Icon.png/revision/latest?cb=20180708004617'
        },
        {
          name: 'Teostra',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/d/d7/MHW-Teostra_Icon.png/revision/latest?cb=20180129013141'
        },
        {
          name: 'Vaal Hazak',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/f/fb/MHW-Vaal_Hazak_Icon.png/revision/latest?cb=20190910185557'
        },
        {
          name: 'Black Diablos',
          icon:
            'https://vignette.wikia.nocookie.net/monsterhunter/images/d/dc/MHW-Black_Diablos_Icon.png/revision/latest?cb=20181008232237'
        }
      ],
      cursorPosition: null,
      loaded: false
    }
  },
  components: {
    SectionTitle
  },
  methods: {
    ...mapActions({
      selectedCode: 'selectedCode'
    })
  },
  mounted() {
    const vm = this
    gsap.defaults({ ease: 'power2' })

    gsap.utils.toArray('.banner-slide').forEach((slide, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner-container',
          start: '+=100px +=100px',
          end: '+=300',
          scrub: 2
          // markers: true
        },
        onComplete: () => {
          vm.selectedCode(1)
        }
      })
      tl.from(slide, {
        y: '-100%',
        delay: index * 0.3,
        onUpdate: function() {
          vm.loaded = false
        },
        onComplete: function() {
          vm.loaded = true
        }
      })
        .to(
          slide,
          {
            y: '1rem'
          },
          '-=0.1'
        )
        .to(
          slide,
          {
            y: 0
          },
          '-=0.2'
        )
    })
  }

  // mounted() {
  //   // Define scroll trigger details
  //   const trigger = {
  //     trigger: '.container',
  //     start: '+=100px +=100px',
  //     end: '+=300',
  //     scrub: 2
  //   }
  //   // Iterate Timeline construction to all cards
  //   gsap.utils.toArray('.cards')
  //   .forEach((card, index) => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: trigger
  //     })
  //     // Chain up Timeline animations
  //     tl.from( card, { y: '-100%', delay: index * 0.3 })
  //       .to( card, { y: '1rem' }, '-=0.1' )
  //       .to( card, { y: 0 }, '-=0.2' )
  //   })
  // }
}
</script>
<style lang="scss" scoped>
.slides-container {
  display: flex;
  overflow: hidden;

  .banner-slide {
    flex: 1 0 auto;
    transition: flex-grow 1s, background-image 2s;
    position: relative;
    overflow: hidden;
    background: linear-gradient(to bottom, #555454, #939395, #414142);

    &:hover {
      background-image: url('../static/emblem.png'),
        linear-gradient(to right, #5f5846, #c2bfbf, #5f5846);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-blend-mode: luminosity;
      flex-grow: 3;
    }

    .character-filter {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 300;
      background: linear-gradient(
        to right,
        rgba(29, 29, 27, 0.6),
        rgba(199, 199, 199, 0.1),
        rgba(29, 29, 27, 0.6)
      );
      & > h3 {
        font-family: 'Kaushan Script', cursive;
        writing-mode: tb-rl;
        text-orientation: mixed;
      }

      .text-off {
        font-size: 200%;
        color: rgba(186, 188, 193, 0.7);
        margin-top: 1rem;
        text-shadow: 2px 2px white;
      }
      .text-on {
        font-size: 300%;
        color: #ffffff;
        margin-top: 2rem;
        margin-left: 0.5rem;
      }
    }

    .character-image-on {
      position: absolute;
      top: 0%;
      left: 8%;
      height: 100%;
      max-width: none;
      transform: scale(0.8);
      transition: all 1s ease;
      z-index: 100;
    }

    .character-image-off {
      position: absolute;
      top: 0%;
      left: 0%;
      height: 100%;
      max-width: none;
      transform: translateX(-1rem) translateY(1rem) scale(0.9);
      filter: grayscale(90%);
      z-index: 200;
    }
  }
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 97%;
  transform: translateY(4.3rem);
  filter: grayscale(60%);
}

.blocker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1000;
}

.character-off-enter-active,
.character-off-leave-active {
  transition: all 0.8s ease;
}
.character-off-enter,
.character-off-leave-to {
  transform: translateX(50rem) translateY(5rem) scale(0.6) !important;
  opacity: 0%;
}
.character-on-enter-active,
.character-on-leave-active {
  transition: all 0.5s ease-in 1s;
}
.character-on-enter,
.character-on-leave-to {
  transform: translateX(50rem) translateY(4rem) scale(1) !important;
  opacity: 0%;
}
.fade-enter-active {
  transition: all 0.5s ease 1s;
}
.fade-enter {
  opacity: 0%;
}
</style>
