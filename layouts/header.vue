<template>
  <div class="h-screen">
    <div class="h-16 bg-gray-100 border-b-2 flex justify-between">
      <div class="w-full ml-8 flex justify-start items-center">
          <h2 class="text-2xl">Bookstore</h2>
          <div class="ml-5 flex flex-no-wrap">
              <input type="text" class="h-10 w-64 px-2 rounded-lg bg-gray-200 border-2 border-r-0 border-blue-500 focus:bg-white focus:outline-none" name="keyword" placeholder="Search Items" v-model="keyword" required>
              <button class="appearence-none h-10 bg-blue-500 transform -translate-x-3 px-3 border-4 border-blue-500 text-white rounded-r-lg"> Search </button>
          </div>
      </div>
      <div class="w-1/3 flex justify-around items-center">
            <a class="appearence-none"> Bills </a>
            <a class="appearence-none"> Profile </a>
      </div>
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