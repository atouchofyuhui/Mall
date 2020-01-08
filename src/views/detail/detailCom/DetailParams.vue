<template>
  <div class="detailParams" v-if="Object.keys(detailParams).length !== 0">
    <table>
      <tr v-for="(item, index) in detailParams.info.set" :key="index">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>

    <table v-for="(item, index) in detailParams.rule.tables" :key="index">
      <tr v-for="(item, index) in item" :key="index">
        <td v-for="(item, index) in item" :key="index">{{ item }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    detailParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.detailParams {
  width: 100%;
  padding: 0 1rem;
}
.detailParams table {
  border-collapse: collapse;
}
.detailParams tr {
  border-bottom: 1px solid #666;
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
}
.detailParams tr td {
  /* flex: 1; */
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
