<template>
  <div class="detailRecommend">
    <div
      v-for="(item, index) in detailRecommend"
      :key="index"
      class="detailRecommend-item"
    >
      <a :href="item.item_url"><img :src="item.image" alt=""/></a>
      <p class="detailRecommend_title">{{ item.title }}</p>
      <div class="detailRecommend-item_info">
        <span class="detailRecommend_price">{{ item.price }}</span>
        <span class="detailRecommend_lisks"
          ><img src="@/assets/images/detail/likes.svg" alt="" />{{
            item.itemLikes
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailRecommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detailRecommend {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.detailRecommend-item {
  width: 46%;
  padding: 0.5rem;
}
.detailRecommend-item img {
  width: 100%;
  border-radius: 0.5rem;
}

.detailRecommend_title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.detailRecommend-item_info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.detailRecommend_price {
  font-size: 1.4rem;
  color: #f00;
}
.detailRecommend_lisks {
  padding-left: 1rem;
}
.detailRecommend_lisks img {
  width: 1.2rem;
  height: 1.2rem;
  padding-right: 0.5rem;
}
</style>
