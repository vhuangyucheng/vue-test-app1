<script setup>

const active = ref(0);

</script>
<template>
  <!--  <div>hello isboyjc, This is toolsdog home page!</div>-->
  <!--  <van-button type="primary">主要按钮</van-button>-->

  <!--  &lt;!&ndash; 这里 &ndash;&gt;-->
  <!--  <HelloWorld />-->
  <van-sticky>
    <van-row style="background: #fff;">
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
    <van-tabs v-model:active="active">
      <van-tab v-for="index in 8" :title="'标签 ' + index">
        <!--      内容 {{ index }}-->

      </van-tab>
    </van-tabs>
  </van-sticky>

  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>

  <van-grid :column-num="2">
    <van-grid-item v-for="value in 32" :key="value" icon="photo-o" text="文字"/>
  </van-grid>


  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/CateList">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>

