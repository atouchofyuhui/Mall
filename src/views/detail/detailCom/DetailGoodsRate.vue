<template>
  <div class="detailRate">
    <div class="detailRate_title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div v-for="(item, index) in detailRate.list" :key="index">
      <div class="detail_user_info">
        <img :src="item.user.avatar" alt="" />
        <span>{{ item.user.uname }}</span>
      </div>
      <!-- 评论信息 -->
      <p class="detailRate_content">{{ item.content }}</p>
      <!-- 评论时间 -->
      <div class="detailRate_style">
        <span>{{ item.created | showDate }}</span>
        <span>{{ item.style }}</span>
      </div>
      <!-- 评论图片 -->
      <div class="detailRate_img">
        <span v-for="(item, index) in item.images" :key="index">
          <img :src="item" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/components/common/utils";
export default {
  props: {
    detailRate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      // 1.将时间戳转为Date对象
      const date = new Date(value * 1000);
      // 2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>

<style>
.detailRate {
  padding: 1rem;
}
.detailRate_title {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #f3f3f3;
}
.detail_user_info {
  display: flex;
  align-items: center;
}
.detail_user_info img {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  padding: 0.5rem;
}
.detailRate_content {
  color: #666;
  font-size: 1.4rem;
  line-height: 2rem;
  margin: 0;
  padding: 0;
}
.detailRate_style {
  padding-top: 1rem;
  font-size: 1.2rem;
  color: #888;
}
.detailRate_style span {
  padding-right: 0.5rem;
}
.detail_user_info span {
  font-size: 1.4rem;
  color: #333;
}
.detailRate_img {
  padding-top: 1rem;
  display: flex;
}
.detailRate_img span {
  padding-right: 0.5rem;
}
.detailRate_img img {
  width: 6rem;
  height: 6rem;
}
</style>
