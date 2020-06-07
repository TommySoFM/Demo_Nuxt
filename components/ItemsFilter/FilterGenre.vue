<template>
  <div class="genre" :class="[{expanded: isExpanded}]">
    <div class="genre__header" @click="onClick">
      <div> <slot name="header"/> </div>
    </div>
    <transition name="fade">
      <div class="genre__body" v-if="isExpanded">
        <slot name="body" :isExpanded="isExpanded"/>
      </div>
    </transition>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        isExpanded: false
      }
    },
    props: [
      'filter'
    ],
    methods: {
      ...mapActions({
        selectFilter: 'selectFilter'
      }),
      onClick() {
        this.selectFilter(this.filter)
        this.isExpanded = !this.isExpanded
      }
    }
  }
</script>
<style scoped lang="scss">
  .genre {
    position: absolute;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    transition: all .5s ease;

    &__header {
      width: 80%;
      color: #7F828B;
      font-size: 1.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: all .5s ease .2s;
      &:hover {
        color: #44957a;
      }
      &:after{
        display: inline-block;
        content: '';
        width: 70%;
        border-bottom: #44957a 3px double;
        transform: translateY(-1.5rem);
      }
    }
    &__body {
      width: 100%;
      margin-bottom: 5px;
    }
  }

  .expanded {
    position: absolute;
    top: 3%;
    left: 0;
    &>.genre__header {
      color: #44957a;
      transform: scale(1.3);
      transition: all .5s ease .8s;
      &:after {
        border-bottom-style: solid;
      }
    }
  }

  .fade-enter-active {
    transition: all .5s ease 1s;
  }
  .fade-leave-active {
    transition: all .1s ease
  }
  .fade-enter, .fade-leave-to {
    height: 0;
    opacity: 0;
  }
  .fade-enter-to, .fade-leave {
    height: 25vh;
    opacity: 1;
  }
</style>
