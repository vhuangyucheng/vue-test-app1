<script setup>

const timePattern = "MM-DD HH:MM"
const route = useRoute();
const machineId = route.query.id;

import goBackArrow from '../store/goBackArrow';

const store = goBackArrow();
store.goBackArrow();
store.setPageName("工单列表")


const value1 = ref(1);
const value2 = ref('a');
const option1 = [
  {text: '未关闭/open', value: 1},
  {text: '关闭/close', value: 2},
  {text: '全部/all', value: 0},
];
const option2 = [
  {text: '默认排序', value: 'a'},
  {text: '最新排序', value: 'b'},
];

const dataList = ref();
import axios from "axios";

var data1 = axios(
    {
      url: "/api/machines/listTicket",
      method: "POST",
      data: {
        "status": 1,
        "machineId": machineId
      },
      contentType: "json",
      processData: false,
      dataType: "json"
    }
).then(function (response) {
  dataList.value = response.data.list;
  console.log(dataList)
});
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
        url: "/api/machines/listTicket",
        method: "POST",
        data: {
          "status": value1.value,
          "machineId": machineId
        },
        contentType: "json",
        processData: false,
        dataType: "json"
      }
  ).then(function (response) {
    dataList.value = response.data.list;
  })
}
const router = useRouter();
const getTicket = (id) => {
  // this.$router.push({path: 'listTicket', query: {id: id}});
  // myRouter.push({path: 'listTicket', query: {id: id}});
  console.log(id)
  router.push({path: 'closeTicket', query: {id: id}})
}
// import {useRouter} from "vue-router";
const addTicket = () => {
  // console.log(router)
  router.push({path: '/addTicket', query: {id: machineId}})
}

const dateFormat = (ticketIssueTime, ticketCloseTime)=>{
  const date = new Date(ticketIssueTime);
  const date2 = new Date(ticketCloseTime);
  if(ticketCloseTime ===null)
  return ' at \xa0\xa0\xa0' + date.getMonth().toString() + '-'+ date.getUTCDate().toString()+ '  '+  + '\n'+ date.toLocaleTimeString()
  return ' at ' + date.getMonth().toString() + '-'+ date.getUTCDate().toString()+ '  '+  + '\n'+ date.toLocaleTimeString()+
      ' update at ' + date2.getMonth().toString() + '-'+ date2.getUTCDate().toString()+ '  '+  + '\n'+ date2.toLocaleTimeString()
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
    <van-cell v-for="item in dataList" :key="item.ticketId" :title="item.ticketType"
              :label="'sn：'+item.ticketId +  dateFormat(item.ticketIssueTime, item.ticketCloseTime)"
              @click="getTicket(item.ticketId)">
      <van-tag v-if="item.ticketStatus === 0" type="danger">未关闭</van-tag>
      <van-tag v-else-if="item.ticketStatus === 1" type="success ">关闭</van-tag>
    </van-cell>
  </van-list>

  <van-back-top bottom="50"/>
  <van-back-top offset="-1" right="300" bottom="100" @click="addTicket">
    <van-icon name="plus"/>
  </van-back-top>
</template>


<style scoped>

</style>