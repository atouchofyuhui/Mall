<template>
  <div class="tabControl">
    <div
      class="tabControl-item"
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      (this.currentIndex = index), this.$emit("tabClick", index);
    }
  }
};
</script>

<style>
.tabControl {
  display: flex;
  background-color: #fff;
}
.tabControl-item {
  flex: 1;
  text-align: center;
  height: 4.4rem;
  line-height: 4.4rem;
  font-size: 1.4rem;
}
.active {
  color: #f00;
}
.active span {
  padding-bottom: 5px;
  border-bottom: 2px solid #f00;
}
</style>
