<script setup>
import goBackArrow from '../store/goBackArrow';

const store = goBackArrow();
store.goBackArrow();

const value = ref();
const result = ref('');
const showPicker = ref(false);
const columns = [
  {text: '问题1', value: 'Hangzhou'},
  {text: '问题2', value: 'Ningbo'},
  {text: '问题3', value: 'Wenzhou'},
  {text: '问题4', value: 'Shaoxing'},
  {text: '问题5', value: 'Huzhou'},
];
const message = ref('');

const onConfirm = ({selectedOptions}) => {
  result.value = selectedOptions[0]?.text;
  showPicker.value = false;
};
import axios from "axios";

const route = useRoute();
const machineId = route.query.id;
import {showNotify} from 'vant';

const router = useRouter();

const onSubmit = (values) => {
  let data = new FormData();
  data.append('file', values.uploader[0].file);
  data.append("machineId", machineId);
  data.append("ticketType", values.picker);
  data.append("ticketDescription", values.message);
  data.append("ticketStatus", 0);
  console.log(values.uploader[0])
  var data1 = axios(
      {
        url: "/api/ticket/insertTicket",
        method: "POST",
        data: data,
        contentType: "multipart/form-data",
        processData: false,
        dataType: "json"
      }
  ).then(function (response) {
    showNotify({type: 'primary', message: '成功', duration: 2000,});
    router.push({path: 'listTicket', query: {id: machineId}});
  });
};
</script>
<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>

      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader :max-count="1" v-model="value"/>
        </template>
      </van-field>
      <van-field
          v-model="result"
          is-link
          readonly
          name="picker"
          label="选择器"
          placeholder="选择问题类型"
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
          name="message"
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
      />


      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-cell-group>
  </van-form>
</template>


<style scoped>

</style>