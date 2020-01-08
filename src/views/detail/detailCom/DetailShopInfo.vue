<template>
  <div class="detail_shop">
    <div class="shopTitle">
      <img :src="shopInfo.shopLogo" alt="" class="shopInfo_logo" />
      <div class="shopInfo_name">{{ shopInfo.name }}</div>
    </div>
    <div class="shopInfo_content">
      <div class="shopInfo_content_box">
        <span>{{ shopInfo.cSells }}</span>
        <span class="allGoods">总销量</span>
      </div>
      <div class="shopInfo_content_box">
        <span>{{ shopInfo.cGoods }}</span>
        <span class="allGoods">全部宝贝</span>
      </div>
      <table class="shopInfo_content_info">
        <tr v-for="(item, index) in shopInfo.score" :key="index">
          <td class="shopInfo_desc">{{ item.name }}</td>
          <td
            class="shopInfo_score"
            :style="{ color: item.isBetter ? 'red' : 'green' }"
          >
            {{ item.score }}
          </td>
          <td
            class="shopInfo_score_color"
            :style="{ background: item.isBetter ? 'red' : 'green' }"
          >
            {{ item.isBetter ? "高" : "低" }}
          </td>
        </tr>
      </table>
    </div>
    <div class="shopInfo_url"><a :href="shopInfo.shopUrl">进店逛逛</a></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.shopTitle {
  display: flex;
  align-items: center;
  padding: 2rem;
}
.shopInfo_logo {
  width: 5.8rem;
  height: 5.8rem;
  border: 1px solid #888;
  border-radius: 50%;
  box-shadow: 0 0 1px #999;
  background-color: #fff;
}

.shopInfo_name {
  padding-left: 0.5rem;
  font-size: 1.6rem;
  color: #666666;
}

.shopInfo_content {
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shopInfo_content_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
}
.shopInfo_content_box:nth-child(2) {
  border-right: 1px solid #f3f3f3;
  padding-right: 2rem;
}
.allGoods {
  font-size: 1.4rem;
}
.shopInfo_content_info td {
  margin-left: 0.5rem;
}
.shopInfo_score_color {
  color: #fff;
}

.shopInfo_url {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 2px solid #f3f3f3;
}
.shopInfo_url a {
  padding: 0.5rem 4rem;
  background-color: #f5f5f5;
  color: #666;
  font-size: 1.2rem;
}
</style>
