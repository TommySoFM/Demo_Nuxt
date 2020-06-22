<template>
  <div class="w-full" :class="`${callName}-container`">
    <h3 class="title" :class="callName">
      <slot />
    </h3>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { mapActions } from 'vuex'
export default {
  props: ['callName', 'parentName'],
  methods: {
    ...mapActions({
      selectedCode: 'selectedCode'
    })
  },
  mounted() {
    const vm = this
    const target = '.' + this.callName
    const container = '.' + this.callName + '-container'
    const parent = '.' + this.parentName

    gsap.set(target, { x: 0, fontSize: '230%', marginTop: 0, autoAlpha: 1 })
    gsap.to(target, {
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
      // onComplete: () => {
      //   vm.selectedCode(0)
      // }
    })

    gsap.to(container, {
      scrollTrigger: {
        trigger: parent,
        pin: container,
        pinSpacing: false
      }
    })

    // mounted() {
    //   // Define scroll trigger details
    //   const trigger = {
    //     trigger: target,
    //     start: 'top top',
    //     scrub: 1,
    //   }
    //   // Style before animation starts
    //   gsap.set( '.title', {
    //       x: 0,
    //       fontSize: '230%',
    //       marginTop: 0,
    //       autoAlpha: 1
    //     })
    //   // Animation details
    //   gsap.to( '.title',
    //     {
    //       x: -40,
    //       fontSize: '150%',
    //       marginTop: '1.5rem',
    //       autoAlpha: 0.6,
    //       scrollTrigger: trigger}
    //     )
    //   }
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