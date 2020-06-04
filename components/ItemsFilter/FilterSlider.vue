<template>
  <div class="slider" v-if="!isExpanded">
    <div class="slider-price">
      From $<input v-model="value[0]" class="slider-price__input">
      to $<input v-model="value[1]" class="slider-price__input">
    </div>
    <vue-slider slot="body" v-model="value"
                :min="0" :max="maxPrice" :marks="marks" :adsorb="true"
                :tooltip-formatter="'${value}'" :enable-cross="false" :contained="true">
      <template v-slot:step="{ label, active }">
        <div style="display: none"></div>
      </template>
    </vue-slider>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: [0, 0]
      }
    },
    props: [
      'maxPrice',
      'isExpanded'
    ],
    computed: {
      marks() {
        const maxPrice = this.maxPrice
        const unit = Math.max(Math.ceil(maxPrice/30), 1) * 5
        const points = Math.floor(maxPrice/unit)
        let array = []
        for (let i=0; i <= points; i++) {
          array.push(i * unit)
        }
        return array
      }
    },
    mounted() {
      this.value = [0, this.maxPrice]
    },
    watch: {
      value() {
        const priceObject = new Object({ genre: 'price', data: this.value})
        let component = this;
        do {
          component.$emit('receiverUpdate', priceObject);
          component = component.$parent;
        } while (component);
      }
    }
  }
</script>
<style scoped lang="scss">
  .slider {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    border: #44957a 5px solid;
    border-radius: 0 10px 10px 10px;

    &-price {
      margin: .5rem;
      &__input {
        width: 2rem;
      }
    }
  }
</style>
