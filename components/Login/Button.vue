<template>
  <div class="button">
      <button @click="clickFunction"> <slot/> </button>
  </div>
</template>
<script>
  export default {
    props: [
      'clickFunction'
    ]
  }
</script>
<style scoped lang="scss">
  .button {
    width: 7rem;
    height: 3rem;
    padding: .5rem 0;
    border-radius: 10px;
    &>button {
      outline: none;
      color: white;
      font-size: 130%;
      font-weight: 800;
    }
  }
</style>
