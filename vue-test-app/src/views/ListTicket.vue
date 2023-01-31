<script setup>
import myRouter from '../router'
console.log(myRouter.currentRoute.value.query.id)
// const that = this;
// console.log(that.$route.params)

import goBackArrow from '../store/goBackArrow';
const store = goBackArrow();
store.goBackArrow();



const value1 = ref(0);
const value2 = ref('a');
const option1 = [
  {text: '未关闭/open', value: 0},
  {text: '关闭/close', value: 1},
  {text: '全部/all', value: 2},
];
const option2 = [
  {text: '默认排序', value: 'a'},
  {text: '最新排序', value: 'b'},
];

const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const loading = ref(false);
const finished = ref(false);

</script>
<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1"/>
    <van-dropdown-item v-model="value2" :options="option2"/>
  </van-dropdown-menu>

  <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item">test</van-cell>
  </van-list>

  <van-back-top bottom="50"/>
</template>


<style scoped>

</style>