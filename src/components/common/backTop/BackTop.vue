<template>
  <div class="backTop">
    <img src="@/assets/images/backTop/backTop.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.backTop {
  position: fixed;
  right: 1rem;
  bottom: 5.9rem;
  width: 4.8rem;
  height: 4.8rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
}

.backTop img {
  width: 3.8rem;
  height: 3.8rem;
  object-fit: cover;
}
</style>
