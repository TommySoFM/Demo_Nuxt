<template>
  <div>
    <div class="title">
      <span style="font-size: 200%; font-weight: 800; color: #367862; text-decoration: underline"> {{ itemNumber }}</span>
      <span style="font-size: 140%; font-weight: 700; color: #367862;"> Items </span> <br>
      <span style="font-size: 100%; font-weight: 700; color: lightslategray;"> in Shopping Cart </span>
    </div>
    <div class="items">
      <CartItem v-for="item in cartItems" :key="item.name" :item="item"/>
    </div>
    <div class="total">
      <span style="font-size: 150%; font-weight: 800; color: #44957a"> Total: </span>
      <span style="font-size: 160%; font-weight: 800; color: #44957a"> ${{ totalPrice }} </span>
    </div>
    <div class="payment">
      <button> Proceed to Payment </button>
    </div>
  </div>
</template>
<script>
  import CartItem from "~/components/Cart/CartItem";
  export default {
    props: [
      'cartItems'
    ],
    computed: {
      itemNumber() {
        return this.cartItems.length
      },
      totalPrice(){
        let total = 0
        this.cartItems.forEach(item => { total += (item.discounted || item.price) * item.quantity})
        return total
      }
    },
    components: {
      CartItem
    }
  }
</script>
<style scoped lang="scss">
  .title {
    width: 100%;
    height: fit-content;
    text-align: center;
    margin: 10% 0;
  }
  .items {
    height: 60vh;
    overflow: auto;
    border-top: rgba(166, 176, 186, 0.5) 2px solid;
    border-bottom: rgba(166, 176, 186, 0.5) 2px solid;
  }
  .total {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
  }
  .payment {
    margin-top: .5rem;
    text-align: center;

    &>button {
      width: 70%;
      height: 10%;
      padding: .6rem 0;
      color: white;
      font-size: 110%;
      font-weight: 800;
      background-color: #44957a;
      border: #44957a 2px solid;
      border-radius: 10px;
      outline: none;
    }
  }
</style>
