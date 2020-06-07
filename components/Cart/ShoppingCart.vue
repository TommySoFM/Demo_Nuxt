<template>
  <CartFrame direction="set-right" sequence="0">
    <template slot="title"> Cart </template>
    <template slot="body">
      <CartBody :cart-items="cartItems" />
    </template>
  </CartFrame>
</template>
<script>
  import CartFrame from "~/components/Cart/CartFrame";
  import CartBody from "~/components/Cart/CartBody";
  export default {
    data() {
      return {
        cartItems: [
          {
            name: 'Diablos',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/47/MHW-Diablos_Icon.png/revision/latest?cb=20181008232238',
            price: 3.99,
            discounted: 2.99,
            quantity: 5
          },
          {
            name: 'Kirin',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/81/MHW-Kirin_Icon.png/revision/latest?cb=20180129013139',
            price: 10.99,
            discounted: 8.99,
            quantity: 1
          },
          {
            name: 'Nergigante',
            icon: 'https://vignette.wikia.nocookie.net/monsterhunter/images/4/4c/MHW-Nergigante_Icon.png/revision/latest?cb=20190721071521',
            price: 10.99,
            quantity: 3
          },
        ]
      }
    },
    components: {
      CartFrame,
      CartBody
    }
  }
</script>
