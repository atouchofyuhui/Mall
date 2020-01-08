<template>
  <div class="detail-info">
    <div class="info_title">{{ goodsInfo.title }}</div>
    <div class="info_price">
      <span class="info_price_new">{{ goodsInfo.price }}</span>
      <span class="info_price_old">{{ goodsInfo.oldPrice }}</span>
      <div v-if="goodsInfo.discountDesc" class="info_price_discountDesc">
        {{ goodsInfo.discountDesc }}
      </div>
    </div>
    <div class="info_columns">
      <span v-for="(item, index) in goodsInfo.columns" :key="index">{{
        item
      }}</span>
    </div>
    <div class="info_services">
      <span
        v-for="(item, index) in goodsInfo.services"
        :key="index"
        class="info_services_item"
      >
        <img :src="item.icon" alt="" class="services_icon" />
        <span class="services_name">{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.info_title {
  font-size: 1.4rem;
  padding: 0.5rem;
}

.info_price {
  display: flex;
  /* align-items: center; */
  padding-top: 1rem;
}
.info_price_new {
  font-size: 1.8rem;
  color: #ff687a;
}

.info_price_old {
  color: #666666;
  text-decoration: line-through;
  padding-left: 1rem;
  display: flex;
  align-items: flex-end;
}

.info_price_discountDesc {
  padding: 5px;
  background-color: #ff687a;
  color: #ffffff;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
  display: flex;
  align-items: flex-start;
}

.info_columns {
  display: flex;
  padding: 2rem 0.5rem 1rem;
  justify-content: space-between;
  color: #666666;
  font-size: 1.2rem;
  border-bottom: 1px solid #f5f5f5;
}

.info_services {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0.5rem;
  border-bottom: 2px solid #f3f3f3;
}
.info_services_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333333;
}
.info_services_item img {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
