<template>
  <div class="modal">
    <div class="modal__body">
      <div class="tags">
        <div class="tag" :class="[isOnLogin ? 'active' : 'passive']" @click="isOnLogin=true"> Login </div>
        <div class="tag" :class="[!isOnLogin ? 'active' : 'passive']" @click="isOnLogin=false"> Register </div>
      </div>
      <div class="content" :style="[ isOnLogin ? { height: 20 + 'rem' } : { height: 28 + 'rem' } ]">
        <transition name="fade">
          <Login v-if="isOnLogin"/>
          <signup v-else/>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import Login from './Login'
  import Signup from './Signup'
  export default {
    data() {
      return {
        isOnLogin: true
      }
    },
    components: {
      Login,
      Signup
    }
  }
</script>
<style scoped lang="scss">
  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(107, 108, 109, 0.6);
    z-index: 110;

    &__body {
      position: absolute;
      top: 15%;
      left: 35%;
      width: 25rem;
      height: fit-content;
      display: flex;
      flex-direction: column;

      .tags {
        height: 3rem;
        flex: 0 1 auto;
        display: flex;
        text-align: center;
        cursor: pointer;
        .tag {
          width: 50%;
          height: 100%;
          font-weight: 700;
          font-size: 170%;
          border-radius: 10px 10px 0 0 ;
        }
        .active {
          color: white;
          background-color: #44957a;
          border: #44957a 2px solid;
          z-index: 120;
        }
        .passive {
          color: lightgray;
          background-color: #869e96;
          border: #869e96 2px solid;
          z-index: 100;
          filter: blur(.8px) brightness(60%);
        }
      }
      .content {
        flex: 0 1 auto;
        background-color: white;
        transition: all .5s ease;
        border-radius: 0 0 20px 20px;
      }
    }
  }

  .fade-enter {
    transform: translateY(-1rem);
    opacity: 0;
    will-change: transform;
  }
  .fade-enter-to {
    transform: translateY(0);
    opacity: 1;
  }
  .fade-enter-active {
    transition: all .5s ease;
  }
</style>
