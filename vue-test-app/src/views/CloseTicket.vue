<script setup>
import goBackArrow from "../store/goBackArrow";

const store = goBackArrow();
store.goBackArrow();
store.setPageName("更新工单")

const route = useRoute();
const ticketId = route.query.id;
const result = ref("");
const firstImg = ref([

]);

let ticketData = ref({});
let img = ref();
import axios from "axios";

var data1 = axios({
  url: "/api/ticket/getTicket",
  method: "POST",
  data: {
    ticketId: ticketId,
  },
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  ticketData.value = response.data;
  result.value = response.data.ticketType;
  // {url: 'http://10.10.130.87:5173/'+response.data.ticketImg},
  // {url: 'http://10.10.130.87:5173/'+ response.data.ticketImg===null?"":response.data.ticketImg2}
  firstImg.value.push({ url: "http://localhost:5173/" + response.data.ticketImg });
  response.data.ticketImg2 !== null? firstImg.value.push({ url: "http://localhost:5173/" + response.data.ticketImg2 }):null
});

const showPicker = ref(false);
const columns = [
  { text: "问题1", value: "Hangzhou" },
  { text: "问题2", value: "Ningbo" },
  { text: "问题3", value: "Wenzhou" },
  { text: "问题4", value: "Shaoxing" },
  { text: "问题5", value: "Huzhou" },
];
const value1 = ref("");

const onConfirm = ({ selectedOptions }) => {
  result.value = selectedOptions[0]?.text;
  showPicker.value = false;
};

import { showImagePreview, showNotify } from "vant";

import getMachineId from "../store/getMachineId";

const machineIdStore = getMachineId();

const router = useRouter();
let formRef1 = ref();
const onSubmit = (values) => {
  console.log(formRef1.value.getValues());
  console.log(values);
};

const nonCloseSubmit = () => {
  if (
    formRef1.value.getValues().uploader.length === 1 ||
    formRef1.value.getValues().uploader[1].file === undefined
  ) {
    console.log("nonCloseSubmitNoImg");
    updateWithoutImg(0);
  } else {
    console.log("nonCloseSubmitImg");
    updateWithImg(0);
  }
};
const reopenSubmit = () => {
  ticketData.value.ticketStatus = 0;
  updateWithoutImg(0);
};
const closeSubmit = () => {
  ticketData.value.ticketStatus = 1;
  if (
    formRef1.value.getValues().uploader.length === 1 ||
    formRef1.value.getValues().uploader[1].file === undefined
  ) {
    updateWithoutImg(1);
  } else {
    updateWithImg(1);
  }
};

const updateWithImg = (status) => {
  let data = new FormData();
  console.log(machineIdStore.MachineId);
  data.append("ticketId", ticketId);
  data.append("file", formRef1.value.getValues().uploader[1].file);
  data.append("machineId", machineIdStore.MachineId);
  data.append("ticketType", formRef1.value.getValues().picker);
  data.append("ticketDescription", formRef1.value.getValues().message1);
  data.append("ticketSolution", formRef1.value.getValues().message2);
  data.append("ticketStatus", status);
  var data1 = axios({
    url: "/api/ticket/updateTicket",
    method: "POST",
    data: data,
    contentType: "multipart/form-data",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    showNotify({ type: "primary", message: "成功", duration: 2000 });
  });
};
const updateWithoutImg = (status) => {
  axios({
    url: "/api/ticket/reopenTicket",
    method: "POST",
    data: {
      ticketId: ticketId,
      ticketStatus: status,
      ticketType: formRef1.value.getValues().picker,
      ticketDescription: formRef1.value.getValues().message1,
      ticketSolution: formRef1.value.getValues().message2,
    },
    contentType: "json",
    processData: false,
    dataType: "json",
  }).then(function (response) {
    showNotify({ type: "primary", message: "成功", duration: 2000 });
  });
};
</script>
<template>
  <van-form
    @submit="onSubmit"
    :disabled="ticketData.ticketStatus === 1"
    ref="formRef1"
  >
    <van-cell-group inset>
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader :max-count="2" v-model="firstImg" />
        </template>
      </van-field>
      <!--      <van-row>-->
      <!--        <van-col span="8">-->
      <!--          <van-cell title="图片"/>-->
      <!--        </van-col>-->
      <!--        <van-image-->
      <!--            width="100"-->
      <!--            height="100"-->
      <!--            :src="'http://10.10.130.87:5173/'+ticketData.ticketImg"-->
      <!--            @click="preview(ticketData.ticketImg)"-->
      <!--        />-->
      <!--      </van-row>-->

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
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          v-if="ticketData.ticketStatus === 0"
          @click="nonCloseSubmit"
        >
          提交留言/ 添加照片，但不关闭
        </van-button>
      </div>

      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          v-if="ticketData.ticketStatus === 0"
          @click="closeSubmit"
        >
          关闭
        </van-button>
      </div>

      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          v-if="ticketData.ticketStatus === 1"
          @click="reopenSubmit"
        >
          重新打开工单
        </van-button>
      </div>
    </van-cell-group>
  </van-form>
</template>

<style scoped></style>
