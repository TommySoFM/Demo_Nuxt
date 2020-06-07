<template>
  <CustomFrame style="height: 25rem">
    <template slot="body">
      <data-input type="text" input-name="Email" :parentValue="username" @input="(value) => { this.username = value}" />
      <data-input type="password" input-name="Password" :parentValue="password" @input="(value) => { this.password = value}"/>
    </template>
    <template slot="button">
      <custom-button class="active" :click-function="isClicked"> Login </custom-button>
      <custom-button class="passive" :click-function="isClicked"> Cancel </custom-button>
    </template>
  </CustomFrame>
</template>
<script>
  import DataInput from "~/components/Login/Input";
  import CustomButton from "~/components/Login/Button";
  import CustomFrame from "~/components/Login/Frame";
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      DataInput,
      CustomButton,
      CustomFrame
    },
    methods: {
      isClicked() {
        console.log('Clicked')
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
