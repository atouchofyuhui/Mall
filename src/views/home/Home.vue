<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tab_control"
      ref="tabControlT"
      v-show="isFixed"
    />
    <bscroll
      class="wrapper_height"
      ref="scroll"
      @scroll="contentScroll"
      :probeType="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad" />
      <recommend :recommend="recommend" />
      <popular />
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControlB"
      />
      <goods-list :goods="goods[currentType].list" />
    </bscroll>
    <back-top @click.native="backTop" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Bscroll from "@/components/common/scroll/Bscroll";
import BackTop from "@/components/common/backTop/BackTop";
import { debounce } from "@/components/common/utils.js";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import Recommend from "@/views/home/childComps/Recommend";
import Popular from "@/views/home/childComps/Popular";
import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false
      // saveY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Popular,
    TabControl,
    GoodsList,
    Bscroll,
    BackTop
  },
  // destroyed() {},
  activated() {
    // this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  // deactivated() {
  //   this.saveY = this.$refs.scroll.getScrollY();
  //   console.log(this.saveY);
  // },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     * 解决吸顶效果
     * 防抖与节流
     */
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControlB.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControlT.currentIndex = index;
      this.$refs.tabControlB.currentIndex = index;
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 回到顶部的显示与隐藏
    contentScroll(position) {
      this.isShow = -position.y > 500;
      this.isFixed = -position.y > this.tabOffsetTop;
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        (this.banner = res.data.banner.list),
          (this.recommend = res.data.recommend.list);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list), this.goods[page] + 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  mounted() {
    // 传入防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("imageItemLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
    // console.log(this.$refs.tabControl.$el.offsetTop);
  }
};
</script>

<style>
#home {
  height: 100vh;
  padding-top: 4.4rem;
  position: relative;
}
.nav-bar {
  background-color: rgba(230, 106, 114, 1);
  box-shadow: 0 1px 1px rgb(100, 100, 100, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}

.wrapper_height {
  /* height: calc(100vh - 9.3rem); */
  overflow: hidden;
  position: absolute;
  top: 4.4rem;
  bottom: 4.9rem;
  left: 0;
  right: 0;
  height: 100vh;
  /* margin-top: 4.4rem; */
}

/* .tabFixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */

.tab_control {
  position: relative;
  z-index: 6;
}
</style>
