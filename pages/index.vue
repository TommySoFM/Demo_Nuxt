<template>
  <div>
    <slideshow />
    <poster/>
    <Catalogue />
    <AddToCartModal/>
    <ShoppingCart />
<!--    <Login />-->
  </div>
</template>
<script>
import Slideshow from '@/components/Slideshow'
import Poster from '@/components/Poster'
import Catalogue from "~/components/Catalogue";
import AddToCartModal from "~/components/AddToCart";
import ShoppingCart from "~/components/Cart/ShoppingCart";
import Login from "~/components/Login/Modal";

export default {
  layout: 'header',
  components: {
    Slideshow,
    Poster,
    Catalogue,
    AddToCartModal,
    ShoppingCart,
    Login
  }
}
</script>
