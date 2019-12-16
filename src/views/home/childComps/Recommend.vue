<template>
  <div class="recommend">
    <div
      v-for="(item,index) in recommend"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link"><img
          :src="item.image"
          alt=""
        >{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 3rem;
}
.recommend-item {
  flex: 1;
}
.recommend-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: brown;
}
.recommend-item img {
  width: 7rem;
  height: 7rem;
  padding-bottom: 1rem;
}
</style>