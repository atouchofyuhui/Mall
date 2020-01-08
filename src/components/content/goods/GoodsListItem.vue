<template>
  <div class="goodsList-item" @click="itemClick">
    <img v-lazy="goodsItem.show.img" alt="codedx" @load="imageLoad" />
    <div class="goodsList-info">
      <span class="goodsList-title">{{ goodsItem.title }}</span>
      <span class="goodsList-price">价格：{{ goodsItem.price }}</span>
      <span class="goodsList-cfav">已收藏：{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // iid:null
    };
  },
  props: {
    goodsItem: {
      type: Object,
      dafaul: {}
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf("./home")) {
        this.$bus.$emit("imageItemLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style>
.goodsList-item {
  width: 46%;
  padding: 0.5rem;
}
.goodsList-item img {
  width: 100%;
  border-radius: 0.5rem;
}
.goodsList-info {
  width: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.goodsList-title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.goodsList-cfav {
  position: relative;
}
.goodsList-cfav::before {
  position: absolute;
  left: 0;
  top: 50%;
  content: "";
  /* background: image() */
}
</style>
