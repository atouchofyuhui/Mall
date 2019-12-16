<template>
  <swiper
    v-if="banner.length"
    ref="swiper"
  >
    <SwiperItem
      v-for="(item, index) in banner"
      :key="index"
    >
      <a :href="item.link"><img
          :src="item.image"
          alt=""
        /></a>
    </SwiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index.js";
export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style>
</style>