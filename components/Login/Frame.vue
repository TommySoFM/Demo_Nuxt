<template>
  <div class="signup">
    <div class="signup__body">
      <slot name="body"/>
    </div>
    <div class="signup__buttons">
      <slot name="button"/>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped lang="scss">
  .signup {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__body {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }
    &__buttons {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 3rem;
      text-align: center;
      .active {
        background-color: #44957a;
        border: #44957a 2px solid;
        cursor: pointer;
        transition: transform .3s ease;
        &:hover {
          transform: scale(1.05);
        }
      }
      .passive {
        background-color: lightslategray;
        border: lightslategray 2px solid;
        cursor: pointer;
        transition: all .3s ease;
        &:hover {
          background-color: #95446a;
          border: #95446a 2px solid;
        }
      }
    }
  }
</style>
