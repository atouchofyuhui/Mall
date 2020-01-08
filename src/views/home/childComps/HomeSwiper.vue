<template>
  <swiper v-if="banner.length" ref="swiper">
    <SwiperItem v-for="(item, index) in banner" :key="index">
      <a :href="item.link"
        ><img :src="item.image" alt="" @load="swiperImageLoad"
      /></a>
    </SwiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style></style>
