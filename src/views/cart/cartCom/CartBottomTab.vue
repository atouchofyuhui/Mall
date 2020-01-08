<template>
  <div class="cartBottom_tab">
    <div class="check_all" @click="selectAll">
      <img
        v-if="isSelectAll"
        src="@/assets/images/cart/check_false.svg"
        alt=""
      />
      <img v-else src="@/assets/images/cart/check_true.svg" alt="" />
      <span>全选</span>
    </div>
    <div class="totle_price">合计：{{ totalPrice }}</div>
    <div class="calcuate">去结算({{ calcuate }})</div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isActive: true
  //   };
  // },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.check === false;
          })
          .reduce((preValue, item) => {
            return preValue + item.lowNowPrice * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    calcuate() {
      return this.$store.state.cartList.filter(item => item.check === false)
        .length;
    },
    isSelectAll() {
      console.log(this.$store.state.cartList.filter(item => item.check).length);
      /**
       *  返回的是没被选中的长度
       * 当没被选中的为0，isSelectAll即为false，显示红色图片，
       * 否则只要还有没被选中的，没被选中的长度都不为0，isSelectAll都是true，显示灰色图片
       * */

      return this.$store.state.cartList.filter(item => item.check).length;
    }
  },
  methods: {
    selectAll() {
      if (this.isSelectAll) {
        //全被选中
        this.$store.state.cartList.forEach(item => {
          item.check = false;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.check = true;
        });
      }
    }
  }
};
</script>

<style scoped>
.cartBottom_tab {
  position: fixed;
  bottom: 4.9rem;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 1rem; */
}

.check_all {
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check_all img {
  width: 1.6rem;
  height: 1.6rem;
  padding-right: 0.5rem;
}

.totle_price {
  flex: 3;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calcuate {
  height: 100%;
  flex: 3;
  background-color: #d54400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
</style>
