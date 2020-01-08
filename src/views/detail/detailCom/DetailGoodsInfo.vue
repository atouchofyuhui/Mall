<template>
  <div>
    <div
      v-for="(item, index) in detaiImageslInfo.detailImage"
      :key="index"
      class="detailImages"
    >
      <div v-for="(item, index) in item.list" :key="index">
        <img :src="item" alt="" @load="loadImages" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detaiImageslInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    loadImages() {
      this.$emit("loadImages");
    }
  }
};
</script>

<style>
.detailImages img {
  width: 100%;
  height: 100%;
}
</style>
