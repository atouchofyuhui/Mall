<template>
  <NavBar class="cart_navbar">
    <div slot="center">购物车({{ this.$store.state.cartList.length }})</div>
  </NavBar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
.cart_navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: #f00;
}
</style>
