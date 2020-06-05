<template>
  <div class="item">
    <div class="item__body">
      <img class="item__body__icon" :src="item.icon">
      <div class="item__body__details">
        <div class="item__name"> {{ item.name }} </div>
        <div class="item__price">
          <div class="item__price__unit">
            <span style="font-size: 80%; font-weight: 600">Unit Price: </span> <br>
            <span style="font-size: 110%; font-weight: 600"> ${{ unitPrice }}  </span>
          </div>
          <div class="item__price__quantity">
            <span style="font-size: 80%; font-weight: 600"> Qty: </span> <br>
            <span style="font-weight: 600"> x{{ item.quantity }} </span>
          </div>
          <div class="item__price__total">
            <span style="font-size: 110%; font-weight: 600"> ${{ totalPrice }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'item'
    ],
    computed: {
      unitPrice() {
        return (this.item.discounted || this.item.price)
      },
      totalPrice() {
        const multiple = this.unitPrice * this.item.quantity
        return Math.floor(multiple*100) / 100
      }
    }
  }
</script>
<style scoped lang="scss">
  .item {
    display: flex;
    margin: 2rem 1rem;

    &__body {
      display: flex;
      &__icon {
        width: 80px;
      }
      &__details {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        .item__name {
          font-size: 120%;
          font-weight: 700;
        }
        .item__price {
          display: flex;
          align-items: center;
          &__unit {

          }
          &__quantity {
            margin: 0 1rem;
          }
          &__total {
            margin: 0 1rem;
          }
        }
      }
    }
  }
</style>
