<template>
  <div class="h-screen">
    <div class="h-16 flex justify-between">
      <div class="w-full h-32 ml-8 flex justify-start items-center">
          <img class="w-32 mx-16" src="../static/logo.png"/>
          <div class="ml-5 flex flex-no-wrap">
              <input type="text" class="h-10 w-96 px-2 rounded-lg bg-gray-200 border-2 border-r-0 border-gray-500 focus:bg-white focus:outline-none" name="keyword" placeholder="Search Items" v-model="keyword" required>
              <button class="appearence-none h-10 bg-green-700 transform -translate-x-3 px-3 border-4 border-green-700 text-white rounded-r-lg"> Search </button>
          </div>
      </div>
<!---->
    </div>
    <nuxt />
  </div>
</template>
<script>
export default {
    data () {
        return{
            keyword: ''
        }
    }
}
</script>
<style scoped>

</style>
