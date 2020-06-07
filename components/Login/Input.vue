<template>
  <div class="input">
    <transition name="label">
      <label v-if="!isEmpty"> {{ inputName }}: </label>
    </transition>
    <input :type="type" v-model="value" :placeholder="inputName" :class="[isEmpty ? 'empty' : 'filled']">
  </div>
</template>
<script>
  export default {
    data() {
      return  {
        value: this.parentValue
      }
    },
    props: [
      'inputName',
      'type',
      'parentValue'
    ],
    watch: {
      value() {
        this.$emit('input', this.value)
      }
    },
    computed: {
      isEmpty() {
        return this.value === ''
      }
    }
  }
</script>
<style scoped lang="scss">
  .input {
    position: relative;
    width: 100%;
    margin-top: 2rem;

    &>label {
      position: absolute;
      top: .8rem;
      left: 1rem;
      font-size: 90%;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
    }
    &>input {
      width: 100%;
      height: 3rem;
      background-color: #F5F5F5;
      margin-top: 10px;
      transition: all .3s ease;
    }
    .filled {
      font-size: 80%;
      padding: 10px 20px 0 20px;
    }
    .empty {
      font-size: 100%;
      padding: 10px 20px 10px 20px;
    }
  }

  .label-enter-active, .label-leave-active {
    transition: all .2s ease;
  }
  .label-enter, .label-leave-to {
    opacity: 0;
    transform: translateY(2px);
  }
  .label-enter-to, .label-leave {
    opacity: 1;
    transform: translateY(0);
  }
</style>
