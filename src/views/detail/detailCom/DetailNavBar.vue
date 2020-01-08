<template>
  <NavBar class="nav-bar">
    <div slot="left" class="backword" @click="back">
      <img src="@/assets/images/navBar/backward.svg" alt="" />
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="titles-item"
        @click="cahngeIndex(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
    </div>
  </NavBar>
</template>

<script scoped>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    cahngeIndex(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    back() {
      this.$router.back();
      // this.$router.go(-1);
    }
  }
};
</script>

<style>
.nav-bar {
  position: relative;
  z-index: 3;
  background-color: #fff;
}
.titles {
  height: 100%;
  display: flex;
  color: #333;
}

.titles-item {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active {
  color: #f00;
}

.backword {
  display: flex;
  justify-content: center;
  align-items: center;
}
.backword img {
  width: 2.8rem;
  height: 2.8rem;
}
</style>
