<template>
  <div class="h-108 w-full flex slides-container" @mouseleave="cursor=null">
    <div v-for="(character, index) in characters" class="slide" @mouseover="cursor=index">
      <div class="character-filter" v-if="index !== cursor"><img :src="character.off.text"/></div>
      <transition name="character-off">
        <img :src="character.off.img" class="character-image-off" v-if="index !== cursor"/>
      </transition>
      <div class="character-filter" style="background: none"><img :src="character.on.text" v-if="index == cursor"/></div>
      <transition name="character-on">
        <img :src="character.on.img" class="character-image-on" v-if="index == cursor"/>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        characters: [
          {
            class: 'saber',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_saber.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_saber.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_saber.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_saber.png'}
          },
          {
            class: 'archer',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_archer.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_archer.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_archer.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_archer.png'}
          },
          {
            class: 'lancer',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_lancer.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_lancer.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_lancer.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_lancer.png'}
          },
          {
            class: 'caster',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_caster.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_caster.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_caster.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_caster.png'}
          },
          {
            class: 'rider',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_rider.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_rider.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_rider.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_rider.png'}
          },
          {
            class: 'assassin',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_assassin.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_assassin.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_assassin.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_assassin.png'}
          },
          {
            class: 'berserker',
            off: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/off/class_berserker.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/off/img_berserker.png' },
            on: { text: 'https://www.fate-go.jp/assets/img/pc/top/character/on/class_berserker.png', img: 'https://www.fate-go.jp/assets/img/pc/top/character/on/img_berserker.png'}
          }
        ],
        background: 'https://www.fate-go.jp/assets/img/pc/top/character/bg_emblem.png',
        cursor: null
      }
    }
  }
</script>
<style lang="scss" scoped>
  .slides-container {
    display: flex;
    
    .slide{
      flex: 1 1 auto;
      transition: flex-grow 1s, background-image 2s;
      position: relative;
      overflow: hidden;
      background: linear-gradient(to bottom, #5c7ff5, #728ff3);

      &:hover{
        background-image: url("https://www.fate-go.jp/assets/img/pc/top/character/bg_emblem.png"), linear-gradient(to bottom, #5c7ff5, #728ff3) ;
        background-position: center;
        background-blend-mode: luminosity;
        flex-grow: 3;
      }

      .character-filter {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 10;
        background: rgba(0, 36, 99, 0.7);
      }

      .character-image-on{
        position: absolute;
        height: 100%;
        max-width: none;
        transform: translateX(-10rem) translateY(4rem) scale(1.3);
        transition: all 1s ease;
        z-index: 0;
      }

      .character-image-off{
        position: absolute;
        height: 100%;
        max-width: none;
        transform: translateX(-20rem) translateY(5rem) scale(1.3);
        z-index: 2;
      }
    }
  }


  .character-off-enter-active, .character-off-leave-active{
    transition: all 1s ease;
  }
  .character-off-enter, .character-off-leave-to{
    transform: translateX(5rem) translateY(5rem) scale(1.5) !important;
    opacity: 0%;
  }
  .character-on-enter-active, .character-on-leave-active{
    transition: all .5s ease-in;
  }
  .character-on-enter, .character-on-leave-to{
    transform: translateX(5rem) translateY(4rem) scale(1.0) !important;
    opacity: 0%;
  }
</style>
