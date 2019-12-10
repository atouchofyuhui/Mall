<template>
  <tabbar>
    <tabbar-item link="/home">
      <img
        slot="tabbar-item-icon"
        src="@/assets/images/tabbar/Home.svg"
        alt=""
      />
      <img
        slot="tabbar-item-active-icon"
        src="@/assets/images/tabbar/Home_active.svg"
        alt=""
      />
      <div slot="tabbar-item-text">首页</div>
    </tabbar-item>
    <tabbar-item link="/category">
      <img
        slot="tabbar-item-icon"
        src="@/assets/images/tabbar/fenlei.svg"
        alt=""
      />
      <img
        slot="tabbar-item-active-icon"
        src="@/assets/images/tabbar/fenlei_active.svg"
        alt=""
      />
      <div slot="tabbar-item-text">分类</div>
    </tabbar-item>
    <tabbar-item link="/cart">
      <img
        slot="tabbar-item-icon"
        src="@/assets/images/tabbar/gouwuche.svg"
        alt=""
      />
      <img
        slot="tabbar-item-active-icon"
        src="@/assets/images/tabbar/gouwuche_active.svg"
        alt=""
      />
      <div slot="tabbar-item-text">购物车</div>
    </tabbar-item>
    <tabbar-item link="/profile">
      <img
        slot="tabbar-item-icon"
        src="@/assets/images/tabbar/wode.svg"
        alt=""
      />
      <img
        slot="tabbar-item-active-icon"
        src="@/assets/images/tabbar/wode_active.svg"
        alt=""
      />
      <div slot="tabbar-item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "@/components/common/tabbar/Tabbar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style></style>
