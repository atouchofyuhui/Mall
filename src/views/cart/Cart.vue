<template>
  <div class="cart">
    <CartNavBar />
    <Bscroll class="cart_scroll" ref="scroll">
      <CartList />
    </Bscroll>
    <CartBottomTab />
  </div>
</template>

<script>
import CartNavBar from "./cartCom/CartNavBar";
import CartList from "./cartCom/CartList";
import CartBottomTab from "./cartCom/CartBottomTab";

import Bscroll from "@/components/common/scroll/Bscroll";
export default {
  name: "Cart",
  components: {
    Bscroll,
    CartNavBar,
    CartList,
    CartBottomTab
  }
  // activated() {
  //   this.$refs.scroll.refresh();
  // }
};
</script>

<style scoped>
.cart {
  height: calc(100vh - 4.9rem);
  /* padding-top: 4.4rem; */
  position: relative;
}
.cart_scroll {
  height: calc(100vh - 4.9rem - 4.9rem - 4rem);
  overflow: hidden;
  position: absolute;
  top: 4.4rem;
  /* bottom: 4.9rem; */
  left: 0;
  right: 0;
}
</style>
