<template>
  <cart-frame
    direction="set-right"
    sequence="1"
    :remoteSwitch="remoteSwitch"
    @keyup.enter="clickNext()"
  >
    <template slot="title">Code</template>
    <template slot="body">
      <div>
        <div class="title">
          <span
            style="font-size: 200%; font-weight: 800; color: #367862"
          >{{ points[selectedCode].title }}</span>
        </div>
        <div class="items">
          <img :src="points[selectedCode].image" style="cursor: pointer" />
        </div>
        <div class="total"></div>
        <div class="payment">
          <button @click="clickNext()">Next</button>
        </div>
      </div>
    </template>
  </cart-frame>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import CartFrame from '~/components/Cart/CartFrame'
export default {
  data() {
    return {
      points: [
        {
          title: 'Scroll Animation I',
          image: '/gsap/gsap-0.png'
        },
        {
          title: 'Scroll Animation II',
          image: '/gsap/gsap-1.png'
        },
        {
          title: 'Pinned Section',
          image: '/gsap/gsap-2.png'
        },
        {
          title: 'Pinned Components',
          image: '/gsap/gsap-3.png'
        }
      ],
      remoteSwitch: false
    }
  },
  computed: {
    ...mapGetters({
      selectedCode: 'getSelectedCode'
    })
  },
  components: {
    CartFrame
  },
  methods: {
    ...mapActions({
      setCode: 'selectedCode'
    }),
    clickNext() {
      const currentCode = this.selectedCode
      currentCode === 3 ? this.setCode(0) : this.setCode(currentCode + 1)
    }
  }
}
</script>
<style scoped lang="scss">
.title {
  width: 100%;
  height: fit-content;
  text-align: center;
  margin: 10% 0;
}
.items {
  height: 60vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: rgba(166, 176, 186, 0.5) 2px solid;
  border-bottom: rgba(166, 176, 186, 0.5) 2px solid;
}
.total {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}
.payment {
  margin-top: 0.5rem;
  text-align: center;

  & > button {
    width: 70%;
    height: 10%;
    padding: 0.6rem 0;
    color: white;
    font-size: 110%;
    font-weight: 800;
    background-color: #44957a;
    border: #44957a 2px solid;
    border-radius: 10px;
    outline: none;
  }
}
</style>