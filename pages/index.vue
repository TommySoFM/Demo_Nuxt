<template>
  <div>
    <slideshow />
    <poster/>
    <Catalogue />
    <AddToCartModal/>
  </div>
</template>
<script>
import Slideshow from '@/components/Slideshow'
import Poster from '@/components/Poster'
import Catalogue from "~/components/Catalogue";
import AddToCartModal from "~/components/AddToCart";
export default {
  layout: 'header',
  components: {
    Slideshow,
    Poster,
    Catalogue,
    AddToCartModal
  }
}
</script>
