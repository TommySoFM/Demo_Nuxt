<template>
  <div class="cart" @mouseleave="isTagHovered=false" :class="direction">
    <cart-tag
      class="fixed z-10"
      @mouseenter.native="isTagHovered=true"
      @click="toggleClick"
      :direction="direction"
      :sequence="sequence"
    >
      <slot name="title" />
    </cart-tag>
    <transition :name="toggleEdge">
      <div class="fixed z-20 flex" v-if="isTagHovered || isTagClicked" @click="toggleClick">
        <cart-tag :direction="direction" :sequence="sequence">
          <slot name="title" />
        </cart-tag>
        <cart-edge :direction="direction" />
      </div>
    </transition>
    <transition :name="togglePanel">
      <div class="fixed z-30 flex" v-if="isTagClicked">
        <cart-tag @click.native="toggleClick" :direction="direction" :sequence="sequence">
          <slot name="title" />
        </cart-tag>
        <cart-edge @click.native="toggleClick" :class="direction" />
        <cart-panel>
          <slot name="body" />
        </cart-panel>
      </div>
    </transition>
  </div>
</template>
<script>
import CartTag from '~/components/Cart/Parts/Tag'
import CartEdge from '~/components/Cart/Parts/Edge'
import CartPanel from '~/components/Cart/Parts/Panel'
export default {
  data() {
    return {
      isTagHovered: false,
      isTagClicked: false
    }
  },
  props: ['direction', 'sequence', 'remoteSwitch'],
  computed: {
    toggleEdge() {
      return this.direction === 'set-right'
        ? 'toggle-edge-right'
        : 'toggle-edge-left'
    },
    togglePanel() {
      return this.direction === 'set-right'
        ? 'toggle-panel-right'
        : 'toggle-panel-left'
    },
    remote() {
      this.isTagClicked = this.remoteSwitch
    }
  },
  mounted() {
    if (this.remoteSwitch === null) {
      this.remoteSwitch = false
    }
    console.log('Remote: ' + this.remoteSwitch)
  },
  watch: {
    remoteSwitch: () => {
      console.log('Watch remote: ' + this.remoteSwitch)
    }
  },
  components: {
    CartTag,
    CartEdge,
    CartPanel
  },
  methods: {
    toggleClick() {
      this.isTagClicked = !this.isTagClicked
      this.isTagHovered = false
      this.$emit('toggle', this.isTagClicked)
    }
  }
}
</script>
<style scoped lang="scss">
.cart {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
}
.set-left {
  left: 0;
  .fixed {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.set-right {
  right: 0;
  flex-direction: row;
  .fixed {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.toggle-edge-right-enter,
.toggle-edge-right-leave-to {
  transform: translateX(2rem);
  will-change: transform;
}
.toggle-edge-right-enter-to,
.toggle-edge-right-leave {
  transform: translateX(0);
}
.toggle-edge-right-enter-active,
.toggle-edge-right-leave-active {
  transition: transform 0.5s;
}

.toggle-panel-right-enter {
  transform: translateX(21rem);
  will-change: transform;
}
.toggle-panel-right-leave-to {
  transform: translateX(23rem);
}
.toggle-panel-right-enter-to,
.toggle-panel-right-leave {
  transform: translateX(0);
}
.toggle-panel-right-enter-active,
.toggle-panel-right-leave-active {
  transition: transform 0.5s;
}

.toggle-edge-left-enter,
.toggle-edge-left-leave-to {
  transform: translateX(-2rem);
  will-change: transform;
}
.toggle-edge-left-enter-to,
.toggle-edge-left-leave {
  transform: translateX(0);
}
.toggle-edge-left-enter-active,
.toggle-edge-left-leave-active {
  transition: transform 0.5s;
}

.toggle-panel-left-enter {
  transform: translateX(-21rem);
  will-change: transform;
}
.toggle-panel-left-leave-to {
  transform: translateX(-23rem);
}
.toggle-panel-left-enter-to,
.toggle-panel-left-leave {
  transform: translateX(0);
}
.toggle-panel-left-enter-active,
.toggle-panel-left-leave-active {
  transition: transform 0.5s;
}
</style>
