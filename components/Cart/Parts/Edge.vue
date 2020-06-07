<template>
    <div class="edge" :class="direction"/>
</template>
<script>
  export default {
      props: [
          'direction'
      ]
  }
</script>
<style scoped lang="scss">
  .edge {
    width: 2rem;
    height: 100vh;
    background-color: #44957a;
    border: #44957a 2px solid;
    cursor: pointer;
  }
  .set-left {
      border-radius: 0 60px 60px 0;
  }
  .set-right {
      border-radius: 60px 0 0 60px;
  }
</style>
