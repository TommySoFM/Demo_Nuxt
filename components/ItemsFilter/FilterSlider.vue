<template>
  <div class="slider" v-if="isExpanded">
    <div class="slider__text">
      Range:
    </div>
    <div class="slider__price">
      MIN: $<input v-model="value[0]"/> MAX: $<input v-model="value[1]"/>
    </div>
    <div class="slider__slider">
      <vue-slider slot="body" v-model="value"
                  :min="0" :max="maxPrice" :marks="marks" :adsorb="true"
                  :tooltip-formatter="'${value}'" :enable-cross="false" :contained="true">
        <template v-slot:step="{ label, active }">
          <div style="display: none"></div>
        </template>
      </vue-slider>
    </div>
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
<style lang="scss">
  .slider {
    width: 90%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    margin-left: 5%;

    &__text {
      align-self: flex-start;
      margin-left: .5rem;
      color: #44957a;
      font-size: 130%;
      font-weight: 800;
    }
    &__price {
      align-self: flex-start;
      margin-top: .5rem;
      margin-left: 2rem;
      color: lightslategray;
      font-size: 90%;
      font-weight: 800;
      &>input {
        background-color: transparent;
        font-weight: 800;
        width: 2rem;
        margin-right: 1rem;
        &:focus {
          background-color: white;
        }
      }
    }
    &__slider {
      border-top: rgba(127, 130, 139, 0.3) 3px solid;
      border-bottom: rgba(127, 130, 139, 0.3) 3px solid;
      margin-top: 1rem;
      padding: 2rem 0 3rem 0 ;
    }
  }

  .vue-slider-process {
    background-color: lightslategray !important;
  }
</style>
