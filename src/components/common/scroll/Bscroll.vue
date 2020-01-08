<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    // 封装填入
    probeType: {
      type: Number,
      default: 0
    },
    // 上拉加载更多
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 打印查看better-scroll一共有哪些方法
    // console.log(this.scroll);
    // 监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      // 发送自定义事件'scroll'
      this.$emit("scroll", position);
    });
    // 上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("节流函数生效");
      this.scroll && this.scroll.refresh();
    }
    // getScrollY() {
    //   return this.scroll ? this.scroll.y : 0;
    // }
  }
};
</script>

<style></style>
