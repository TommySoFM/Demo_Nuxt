<template>
  <div class="tag" :class="[seqClass, direction]">
    <span class="tag__text" >
      <slot />
    </span>
  </div>
</template>
<script>
  export default {
    props: [
      'sequence',
      'direction'
    ],
    computed: {
      seqClass() {
        return 'seq-'+this.sequence
      }
    }
  }
</script>
<style scoped lang="scss">
  .tag {
    width: 2.5rem;
    height: 7rem;
    color: white;
    background-color: #44957a;
    border: #44957a 2px solid;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
      font-size: 170%;
      font-weight: 700;
      writing-mode: vertical-lr;
      text-orientation: sideways;
    }
  }

  .seq-0 {
    margin-top: 75vh;
  }
  .seq-1 {
    margin-top: 60vh;
  }
  .seq-2 {
    margin-top: 45vh;
  }
  .seq-3 {
    margin-top: 30vh;
  }
  .seq-4 {
    margin-top: 15vh;
  }

  .set-left {
    border-radius: 0 10px 10px 0;
  }
  .set-right {
    border-radius: 10px 0 0 10px;
    .tag__text {
      transform: rotate(180deg);
    }
  }
</style>
