<template>
  <div class="detail_bottom">
    <div class="kefu">
      <img src="@/assets/images/detail/kefu.svg" alt="" class="kefu_icon" />
      <span class="kefu_text">客服</span>
    </div>
    <div class="shop">
      <img src="@/assets/images/detail/shop.svg" alt="" class="shop_icon" />
      <span class="shop_text">商店</span>
    </div>
    <div class="likes">
      <img src="@/assets/images/detail/likes.svg" alt="" class="likes_icon" />
      <span class="likes_text">收藏</span>
    </div>
    <div class="cart" @click="addToCart">
      加入购物车
    </div>
    <div class="buy">
      购买
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.detail_bottom {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.detail_bottom span {
  padding-top: 0.5rem;
}
.detail_bottom img {
  width: 2rem;
  height: 2rem;
}

.kefu,
.shop,
.likes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.cart {
  flex: 1.5;
  background-color: #f4cd00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buy {
  flex: 1.2;
  background-color: #c34a66;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
