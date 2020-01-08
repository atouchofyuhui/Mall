<template>
  <div class="cartlist">
    <CartListItem
      v-for="(item, index) in this.$store.state.cartList"
      :key="index"
      :product="item"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem
  }
};
</script>

<style scoped></style>
