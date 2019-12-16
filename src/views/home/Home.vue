<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <HomeSwiper :banner='banner' />
    <recommend :recommend='recommend' />
    <popular />
    <ul>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
      <li>列表11</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import Recommend from '@/views/home/childComps/Recommend'
import Popular from '@/views/home/childComps/Popular'
import { getHomeMultidata } from "@/network/home.js";
export default {
  name: "Home",
  data () {
    return {
      banner: [],
      recommend: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Popular
  },
  created () {
    getHomeMultidata().then(res => {
      (this.banner = res.data.banner.list),
        (this.recommend = res.data.recommend.list);
    });
  }
};
</script>

<style>
#home {
  padding-top: 49px;
}
.nav-bar {
  background-color: rgba(230, 106, 114, 1);
  box-shadow: 0 1px 1px rgb(100, 100, 100, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
