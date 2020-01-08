<template>
  <div class="detail">
    <DetailNavBar @titleClick="titleClick" />
    <Bscroll class="detail_scroll" ref="scroll" @scroll="contentScroll">
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goodsInfo="goodsInfo" />
      <DetailShopInfo :shopInfo="shopInfo" />
      <DetailGoodsInfo
        :detaiImageslInfo="detaiImageslInfo"
        @loadImages="loadImages"
      />
      <DetailParams ref="params" :detailParams="detailParams" />
      <DetailGoodsRate ref="rate" :detailRate="detailRate" />
      <DetailRecommend ref="recommend" :detailRecommend="detailRecommend" />
    </Bscroll>
    <back-top @click.native="backTop" v-show="isShow" />
    <DetailBottomNav @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailCom/DetailNavBar";
import DetailSwiper from "@/views/detail/detailCom/DetailSwiper";
import DetailBaseInfo from "@/views/detail/detailCom/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/detailCom/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/detailCom/DetailGoodsInfo";
import DetailParams from "@/views/detail/detailCom/DetailParams";
import DetailGoodsRate from "@/views/detail/detailCom/DetailGoodsRate";
import DetailRecommend from "@/views/detail/detailCom/DetailRecommend";
import DetailBottomNav from "@/views/detail/detailCom/DetailBottomNav";

import Bscroll from "@/components/common/scroll/Bscroll";
import BackTop from "@/components/common/backTop/BackTop";
import { getDetail, Goods, getRecommend } from "@/network/detail";
import { StringDecoder } from "string_decoder";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detaiImageslInfo: {},
      detailRate: {},
      detailRecommend: [],
      detailParams: {},
      titleTopYs: [],
      isShow: false
    };
  },
  components: {
    Bscroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailGoodsRate,
    DetailRecommend,
    DetailBottomNav,
    BackTop
  },
  created() {
    // 获取id
    this.iid = this.$route.params.iid;
    // 请求详情数据
    getDetail(this.iid)
      .then(res => {
        console.log(res);
        const data = res.result;
        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 创建商品的对象
        this.goodsInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        console.log(this.goodsInfo);
        // 获取商店信息
        this.shopInfo = data.shopInfo;
        // 获取商品详情
        this.detaiImageslInfo = data.detailInfo;
        // 获取商品参数
        this.detailParams = data.itemParams;
        // 获取商品评论
        this.detailRate = data.rate;
      })
      .catch(err => {
        console.log(err);
      });
    // 获取评论数据
    getRecommend().then(res => {
      // console.log(res);
      const data = res.data;
      this.detailRecommend = data.list;
    });

    this.$nextTick(() => {
      this.titleTopYs = [];
      this.titleTopYs.push(0);
      this.titleTopYs.push(this.$refs.params.$el.offsetTop);
      this.titleTopYs.push(this.$refs.rate.$el.offsetTop);
      this.titleTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.titleTopYs);
    });
  },
  methods: {
    loadImages() {
      this.$refs.scroll.refresh();
      this.titleTopYs = [];
      this.titleTopYs.push(0);
      this.titleTopYs.push(this.$refs.params.$el.offsetTop);
      this.titleTopYs.push(this.$refs.rate.$el.offsetTop);
      this.titleTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.titleTopYs);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.titleTopYs[index], 500);
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 回到顶部的显示与隐藏
    contentScroll(position) {
      this.isShow = -position.y > 500;
    },
    // 添加到购物车
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.lowNowPrice = this.goodsInfo.lowNowPrice;
      product.iid = this.iid;
      this.$store.commit("cartPush", product);
    }
  }
};
</script>

<style>
.detail {
  height: 100vh;
  position: relative;
  z-index: 2;
}
.detail_scroll {
  height: calc(100% - 4.4rem);
  background-color: #fff;
}
</style>
