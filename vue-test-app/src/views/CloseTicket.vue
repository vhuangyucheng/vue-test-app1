<script setup>

import goBackArrow from '../store/goBackArrow';

const store = goBackArrow();
store.goBackArrow();

const route = useRoute();
const ticketId = route.query.id;
const result = ref('');


let ticketData = ref({});
let img = ref();
import axios from "axios";

var data1 = axios(
    {
      url: "/api/ticket/getTicket",
      method: "POST",
      data: {
        "ticketId": ticketId
      },
      contentType: "json",
      processData: false,
      dataType: "json"
    }
).then(function (response) {
  console.log(response.data)
  ticketData.value = response.data;
  result.value = response.data.ticketType;
});

const value = ref([
  {url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg'},
]);


const showPicker = ref(false);
const columns = [
  {text: '问题1', value: 'Hangzhou'},
  {text: '问题2', value: 'Ningbo'},
  {text: '问题3', value: 'Wenzhou'},
  {text: '问题4', value: 'Shaoxing'},
  {text: '问题5', value: 'Huzhou'},
];
const value1 = ref('');

const onConfirm = ({selectedOptions}) => {
  result.value = selectedOptions[0]?.text;
  showPicker.value = false;
};

import {showImagePreview, showNotify} from 'vant';

const preview = (ticketImg) => {
  showImagePreview(['http://10.10.130.87:5173/' + ticketImg]);
}
import getMachineId from '../store/getMachineId';

const machineIdStore = getMachineId();
const router = useRouter();
const onSubmit = (values) => {
  console.log(values)
  // let data = new FormData();
  // var data1 = axios(
  //     {
  //       url: "/api/ticket/updateTicket",
  //       method: "POST",
  //       data: {
  //         ticketId: ticketId,
  //         ticketType:values.picker,
  //         ticketDescription:values.message1,
  //         ticketSolution:values.message2,
  //         ticketStatus: 1
  //       },
  //       contentType: "multipart/form-data",
  //       processData: false,
  //       dataType: "json"
  //     }
  // ).then(function (response) {
  //   showNotify({type: 'primary', message: '成功', duration: 2000,});
  //   router.push({path: 'listTicket', query: {id: machineIdStore.MachineId}});
  // });
};

import  { FormInstance } from 'vant';

const formRef = ref<FormInstance>()

formRef.value?.submit();
</script>
<template>

  <van-form @submit="onSubmit" :disabled="ticketData.ticketStatus===1" >
    <van-cell-group inset>
      <van-row>
        <van-col span="8">
          <van-cell title="图片"/>
        </van-col>
        <van-image
            width="100"
            height="100"
            :src="'http://10.10.130.87:5173/'+ticketData.ticketImg"
            @click="preview(ticketData.ticketImg)"
        />
      </van-row>

      <van-field
          v-model="result"
          is-link
          readonly
          name="picker"
          label="选择器"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
          name="message1"
          v-model="ticketData.ticketDescription"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          :placeholder="ticketData.ticketDescription"
          show-word-limit
      />
      <van-field
          name="message2"
          v-model="ticketData.ticketSolution"
          rows="2"
          autosize
          label="解决方案"
          type="textarea"
          maxlength="50"
          placeholder="你是如何修好的"
          show-word-limit
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交留言不关闭
        </van-button>
      </div>

      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit2">
          关闭
        </van-button>
      </div>
    </van-cell-group>
  </van-form>

</template>


<style scoped>

</style>