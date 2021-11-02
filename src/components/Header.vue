<template>
  <ul class="title">
    <li>首页</li>
    <li>最新商品</li>
    <li>热门商品</li>
    <li>购物车</li>
    <li>
      我的订单
      <ul class="menu">
        <li>待付款</li>
        <li>待发货</li>
        <li>待收货</li>
        <li>待签收</li>
      </ul>
    </li>
  </ul>
  <!-- <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button> -->
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
ul {
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 66px;
  color: #fff;
  background: #757885;
}
.title {
  display: flex;
  justify-content: space-around;
}
.menu {
  position: absolute;
  top: 66px;
  display: none;
}
li {
  width: 120px;
  text-align: center;
  list-style: none;
}
.title > li:hover {
  color: #FF6A00;
  background: #fff;
  cursor: pointer;
}
.title > li:last-child:hover .menu {
  display: block;
}
</style>
