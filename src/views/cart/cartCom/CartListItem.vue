<template>
  <div class="cartlistitem">
    <div class="cartlistitem_check" @click="changeCheck">
      <img
        v-if="product.check"
        src="@/assets/images/cart/check_false.svg"
        alt=""
      />
      <img v-else src="@/assets/images/cart/check_true.svg" alt="" />
    </div>
    <img :src="product.image" alt="" />
    <div class="cartlistitem_info">
      <p>{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <p class="price">
        <span>￥{{ product.lowNowPrice }}</span
        ><span>x{{ product.count }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    product: Object,
    default() {
      return {};
    }
  },
  methods: {
    changeCheck() {
      this.product.check = !this.product.check;
    }
  }
};
</script>

<style scoped>
.cartlistitem {
  display: flex;
  height: 10rem;
  align-items: center;
}
.cartlistitem img {
  /* width: 4rem;
  height: 5rem; */
  width: 6rem;
  height: 8rem;
  object-fit: contain;
  flex: 1;
  border-radius: 10px;
}
.cartlistitem_check img {
  width: 1.6rem;
  height: 1.6rem;
  padding: 0 0.5rem;
}
.cartlistitem_info {
  flex: 4;
  padding: 0 1rem;
  overflow: hidden;
}
.cartlistitem_info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cartlistitem_info p:nth-child(2) {
  color: #888888;
}
.cartlistitem_info .price {
  display: flex;
  justify-content: space-between;
}
.cartlistitem_info .price span:first-child {
  color: #f00;
}
</style>
