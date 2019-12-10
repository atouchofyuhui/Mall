<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style>
#tab-bar {
  background-color: #f5f5f5;
  display: flex;
  box-shadow: 0 -1px 1px #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
