<script setup>

import goBackArrow from '../store/goBackArrow';

const store = goBackArrow();
store.disableGoBackArrow();
store.setPageName("机器列表")

const value1 = ref(0);
const value2 = ref('a');
const option1 = [
  {text: '全部机器/listMachine', value: 0},
  {text: '异常机器/listBroken', value: 1},
];
const option2 = [
  {text: '默认排序', value: 'a'},
  {text: '最新排序', value: 'b'},
];


import axios from "axios";


let dataList = ref();
let pageName = ref();
let dataList2 = reactive([1, 2, 3, 4]);

var data1 = axios(
    {
      url: "/api/machines/listMachine",
      method: "POST",
      data: {
        "status": 0
      },
      contentType: "json",
      processData: false,
      dataType: "json"
    }
).then(function (response) {
  dataList.value = response.data.list;
  // console.log(pageName)
})
const loading = ref(false);
const finished = ref(false);
const onLoad = () => {
  console.log("onload")
  // loading.value = false;
  finished.value = true;
}

const changeStatus = () => {
  // console.log(value1)
  axios(
      {
        url: "/api/machines/listMachine",
        method: "POST",
        data: {
          "status": value1.value
        },
        contentType: "json",
        processData: false,
        dataType: "json"
      }
  ).then(function (response) {
    dataList.value = response.data.list;
    // console.log(pageName)
  })
}
const router = useRouter();
// import {useRoute, useRouter} from "vue-router";
import getMachineId from '../store/getMachineId';
const machineIdStore = getMachineId();
const getTicket = (id) => {
  // this.$router.push({path: 'listTicket', query: {id: id}});
  router.push({path: 'listTicket', query: {id: id}});
  machineIdStore.setMachineId(id);
  // console.log(this.$route)

}

</script>
<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" @change="changeStatus"/>
    <van-dropdown-item v-model="value2" :options="option2"/>
  </van-dropdown-menu>

  <van-list
      v-model:loading="loading"
      :finished="finished"
      @load="onLoad"
  >
    <van-cell v-for="item in dataList" :key="item.machineId" :title="item.machineName"
              @click="getTicket(item.machineId)">
      <van-tag v-if="item.machineStatus === 0" type="success">正常</van-tag>
      <van-tag v-else-if="item.machineStatus === 1" type="danger ">异常</van-tag>
    </van-cell>
  </van-list>


  <van-back-top bottom="50"/>
</template>


<style scoped>

</style>