<template>
  <div class="genre">
    <div class="genre__header" @click="isExpanded = !isExpanded">
      <slot name="header"/>
    </div>
    <div class="genre__body">
      <slot name="body" :isExpanded="isExpanded"/>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isExpanded: false
      }
    }
  }
</script>
<style scoped lang="scss">
  .genre {
    width: 100%;
    &__header {
      width: 80%;
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      background-color: #44957a;
      border-radius: 0 5px 0 0;
      padding-left: 2rem;
      cursor: pointer;
    }
    &__body {
      width: 100%;
      margin-bottom: 5px;
    }
  }
</style>
