<script setup>
const active = ref(0)
const onClickLeft = () => history.back();
import goBackArrow from './store/goBackArrow';

const store = goBackArrow();
</script>

<template>
  <!--  <van-row class="my-top">-->
  <!--    <van-col span="6" offset="2"><van-icon name="arrow-left" /></van-col>-->
  <!--    <van-col span="8" ><div>what page</div></van-col>-->
  <!--    <van-col span="8"></van-col>-->
  <!--  </van-row>-->
  <van-nav-bar
      title="标题"
      :left-text="store.leftArrow === true?'返回':''"
      :left-arrow="store.leftArrow === true"
      @click-left="onClickLeft"
  />
<!--  <van-nav-bar-->
<!--      v-if="store.leftArrow === false"-->
<!--      title="标题"-->
<!--      @click-left="onClickLeft"-->
<!--  />-->
<!--  <van-nav-bar-->
<!--      v-if="store.leftArrow === true"-->
<!--      title="标题"-->
<!--      left-text="返回"-->
<!--      left-arrow-->
<!--      @click-left="onClickLeft"-->
<!--  />-->
  <RouterView/>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/HomePage">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/closeTicket">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/listMachine">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/addTicket">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.my-top {
  color: #1c2127;
  font-size: 20px;
  line-height: 50px;
}
</style>

