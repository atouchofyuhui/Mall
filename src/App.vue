<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <transition>
        <router-view />
      </transition>
    </keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "@/components/content/mainTabbar/MainTabbar";
export default {
  name: "app",
  components: {
    MainTabbar
  }
};
</script>

<style>
@import "assets/css/base.css";

#app {
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
