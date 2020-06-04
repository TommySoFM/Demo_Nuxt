<template>
  <div class="modal__background" v-if="isModalOpened" @click.self="closeModal">
    <div class="modal">
      <div class="modal__icon">
        <div class="modal__icon__image">
          <img :src="modalData.icon">
        </div>
      </div>
      <div class="modal__details">
        <div class="modal__details__name">{{ modalData.name }}</div>
        <div> Unit Price: ${{ modalData.discounted || modalData.price }} </div>
        <div>
          <span class="quantity-button" @click="alterQuantity(-1)">-</span>
          <input class="modal__details__quantity" v-model="quantity">
          <span class="quantity-button" @click="alterQuantity(1)">+</span>
        </div>
        <div>
          Total: <span class="modal__details__total"> ${{ total }} </span>
        </div>
        <div>
          <button class="modal__details__button button_confirm"> Confirm </button>
          <button class="modal__details__button button_cancel"  @click="closeModal"> Cancel </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        quantity: 1,
        min: 0,
        max: 100
      }
    },
    computed: {
      ...mapGetters({
        'isModalOpened': 'getIsModalOpened',
        'modalData': 'getModalData'
      }),
      total() {
        const price = this.modalData.discounted || this.modalData.price
        const total = price * this.quantity
        return Math.floor(total * 100)/100
      }
    },
    watch: {
      quantity() {
        if (isNaN(this.quantity)) {
          setTimeout(() => {this.quantity = 1}, 0)
        } else {
          const quantity = parseInt(this.quantity)
          this.quantity = quantity < 1 ? 1 : quantity
          this.quantity = quantity > 99 ? 99 : quantity
        }
      }
    },
    methods: {
      ...mapActions({
        toggleModal: 'toggleModal'
      }),
      alterQuantity(value) {
        const sum = parseInt(this.quantity) + value
        this.quantity = ( sum > this.min && sum < this.max ) ? sum : this.quantity
      },
      closeModal() {
        this.quantity = 1
        this.toggleModal()
      }
    }
  }
</script>
<style scoped lang="scss">
  .modal__background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(215, 216, 222, 0.6);
    z-index: 10;
  }

  .modal {
    width: 50%;
    height: 40%;
    background-color: white;
    position: absolute;
    top: 30%;
    left: 25%;
    border: #44957a 15px solid;
    border-radius: 30px;
    display: flex;

    &__icon {
      width: 100%;
      flex: 1 1 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      &__image {
        width: 80%;
        border: rgba(119, 136, 153, 0.3) 5px solid;
        border-radius: 30px;
        padding: 25px;
        background-color: rgba(215, 219, 220, 0.2);
      }
    }
    &__details {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1.5rem 0;
      &__name {
        width: 100%;
        font-size: 150%;
        font-weight: 700;
        color: #367862;
      }
      &__quantity {
        width: 40px;
        text-align: center;
        border: rgba(119, 136, 153, 0.3) 3px solid;
        border-radius: 5px;
      }
      .quantity-button {
        display: inline-block;
        width: 40px;
        font-size: 120%;
        font-weight: 700;
        color: white;
        text-align: center;
        background-color: rgba(119, 136, 153, 0.3);
        cursor: pointer;
        transition: background-color .3s ease;
        user-select: none;
        &:hover {
          background-color: #44957a;
        }
      }
      &__total {
        font-size: 130%;
        font-weight: 600;
      }
      &__button {
        outline: none;
        color: white;
        font-size: 110%;
        font-weight: 700;
        border-radius: 10px;
        padding: 5px 15px;
        margin-left: 0.5rem;
        transition: all .3s ease;
      }
      .button_confirm {
        border: #44957a 3px solid;
        background-color: #44957a;
        &:hover {
          transform: scale(1.05);
        }
      }
      .button_cancel {
        border: lightslategray 3px solid;
        background-color: lightslategray;
        &:hover {
          border: #95446a 3px solid;
          background-color: #95446a;
        }
      }
    }
  }
</style>
