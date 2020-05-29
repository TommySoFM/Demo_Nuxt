<template>
  <div>
    <slideshow />
    <poster/>
    <Item />
  </div>
</template>
<script>
import Slideshow from '@/components/Slideshow'
import Poster from '@/components/Poster'
import Item from "~/components/Item";
export default {
  layout: 'header',
  components: {
    Slideshow,
    Poster,
    Item
  }
}
</script>
