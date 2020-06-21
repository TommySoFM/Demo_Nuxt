<template>
  <div class="w-full" :class="`${callName}-container`">
    <h3 class="title" :class="callName">
      <slot />
    </h3>
  </div>
</template>
<script>
import { gsap } from 'gsap'
export default {
  props: ['callName', 'parentName'],
  mounted() {
    const target = '.' + this.callName
    const container = '.' + this.callName + '-container'
    const parent = '.' + this.parentName

    gsap.fromTo(
      target,
      {
        fontSize: '230%',
        x: 0,
        marginTop: 0,
        autoAlpha: 1
      },
      {
        fontSize: '150%',
        x: -40,
        marginBottom: '2rem',
        marginTop: '1.5rem',
        autoAlpha: 0.6,
        scrollTrigger: {
          trigger: target,
          start: 'top top',
          scrub: 1
          // markers: true
        }
      }
    )

    gsap.to(container, {
      scrollTrigger: {
        trigger: parent,
        pin: container,
        pinSpacing: false
      }
    })
  }
}
</script>
<style scoped lang="scss">
.title {
  width: fit-content;
  position: relative;
  font-size: 230%;
  font-weight: 700;
  margin: 1rem 0 4rem 3rem;
  opacity: 100%;
  z-index: 1;
  &:after {
    position: absolute;
    content: '';
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 5px;
    margin: 0 auto;
    background: green;
  }
}
</style>