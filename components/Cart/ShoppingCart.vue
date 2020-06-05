<template>
  <div class="cart" @mouseleave="isTagHovered=false">
    <div class="cart__tag fixed" @mouseenter="isTagHovered=true" @click="toggleClick" style="z-index: 9">
      <span class="cart__tag__text" >Cart</span>
    </div>
    <transition name="toggle-edge">
      <div class="fixed" v-if="isTagHovered || isTagClicked" @click="toggleClick" style="display: flex; z-index: 10">
        <div class="cart__tag" >
          <span class="cart__tag__text" >Cart</span>
        </div>
        <div class="cart__edge"/>
      </div>
    </transition>
    <transition name="toggle-panel">
      <div class="fixed" v-if="isTagClicked" style="display: flex; z-index: 12">
        <div class="cart__tag" @click="toggleClick">
          <span class="cart__tag__text" >Cart</span>
        </div>
        <div class="cart__edge" @click="toggleClick"/>
        <div class="cart__panel">
          <div class="cart__panel__title">
            <span style="font-size: 200%; font-weight: 800; color: #367862; text-decoration: underline"> {{ itemNumber }}</span>
            <span style="font-size: 140%; font-weight: 700; color: #367862;"> Items </span> <br>
            <span style="font-size: 100%; font-weight: 700; color: lightslategray;"> in Shopping Cart </span>
          </div>
          <div class="cart__panel__items">
            <CartItem v-for="item in cartItems" :key="item.name" :item="item"/>
          </div>
          <div class="cart__panel__total">
            <span style="font-size: 150%; font-weight: 800; color: #44957a"> Total: </span>
            <span style="font-size: 160%; font-weight: 800; color: #44957a"> ${{ totalPrice }} </span>
          </div>
          <div class="cart__panel__payment">
            <button> Proceed to Payment </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import CartItem from "~/components/Cart/CartItem";
  export default {
    data() {
      return {
        isTagHovered: false,
        isTagClicked: false,
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
    },
    methods: {
      toggleClick() {
        this.isTagClicked= !this.isTagClicked
      }
    }
  }
</script>
<style scoped lang="scss">
  .cart {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    display: flex;

    &__tag {
      width: 2.5rem;
      height: 7rem;
      color: white;
      background-color: #44957a;
      border: #44957a 2px solid;
      border-radius: 10px 0 0 10px;
      text-align: center;
      margin-top: 75vh;
      padding-top: 1.6rem;
      cursor: pointer;

      &__text {
        font-size: 170%;
        font-weight: 700;
        writing-mode: vertical-lr;
        text-orientation: sideways;
      }
    }
    &__edge {
      width: 2rem;
      height: 100vh;
      background-color: #44957a;
      border: #44957a 2px solid;
      border-radius: 60px 0 0 60px;
      cursor: pointer;
    }
    &__panel {
      width: 21rem;
      height: 100vh;
      background-color: #faf5ee;

      &__title {
        width: 100%;
        height: fit-content;
        text-align: center;
        margin: 10% 0;
      }
      &__items {
        height: 60vh;
        overflow: auto;
        border-top: rgba(166, 176, 186, 0.5) 2px solid;
        border-bottom: rgba(166, 176, 186, 0.5) 2px solid;
      }
      &__total {
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
      }
      &__payment {
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
    }

    .fixed {
      position: absolute;
      top: 0;
      right: 0;
    }

    .toggle-edge-enter, .toggle-edge-leave-to {
      transform: translateX(2rem);
      will-change: transform;
    }
    .toggle-edge-enter-to, .toggle-edge-leave {
      transform: translateX(0);
    }
    .toggle-edge-enter-active, .toggle-edge-leave-active {
      transition: transform .5s ;
    }

    .toggle-panel-enter{
      transform: translateX(21rem);
      will-change: transform;
    }
    .toggle-panel-leave-to {
      transform: translateX(23rem);
    }
    .toggle-panel-enter-to, .toggle-panel-leave {
      transform: translateX(0);
    }
    .toggle-panel-enter-active, .toggle-panel-leave-active {
      transition: transform .5s ;
    }
  }
</style>
