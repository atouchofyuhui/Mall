<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!active"><slot name="tabbar-item-icon"></slot></div>
    <div v-else><slot name="tabbar-item-active-icon"></slot></div>
    <div :style="activeStyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    link: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    active() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.active ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    }
  }
};
</script>

<style>
.tabbar-item {
  height: 49px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
}
</style>
