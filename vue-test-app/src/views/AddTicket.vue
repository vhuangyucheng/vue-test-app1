<script setup>
import goBackArrow from '../store/goBackArrow';
const store = goBackArrow();
store.goBackArrow();

const value = ref([
  {url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg'},
]);
const result = ref('');
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
</script>
<template>
  <van-cell-group inset>

    <van-field name="uploader" label="文件上传">
      <template #input>
        <van-uploader v-model="value"/>
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
</template>


<style scoped>

</style>