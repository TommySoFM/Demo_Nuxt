<template>
  <div>
    <slideshow />
    <poster/>
  </div>
</template>
<script>
import slideshow from '@/components/Slideshow'
import poster from '@/components/Poster'
export default {
  layout: 'header',
  components: {
    slideshow,
    poster
  }
}
</script>
