<template>
  <div id="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
#nav-bar {
  display: flex;
  height: 4.4rem;
  align-items: center;
  /* z-index: 6; */
}
.left,
.right {
  width: 6rem;
}
.center {
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
}
</style>
