<template>
  <ul class="title">
    <router-link to="/" tag="li">首页</router-link>
    <li>最新商品</li>
    <li>热门商品</li>
    <router-link to="/shoppingCar" tag="li">购物车</router-link>
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
</template>

<script>
import { ref, watch, onMounted } from 'vue' 
import { useRouter } from 'vue-router'
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const navActive = ref(0)

    const router = useRouter()
    console.log(router.getRoutes());
    console.log(router.currentRoute.value);



    watch(() => router.currentRoute.value.name, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })
    onMounted(() => {
      console.log(router);
      console.log(router.currentRoute.value.path);
    })

    return {
      
    }
  }
}
</script>

<style scoped>
.active {
  color: #FF6A00;
}
a {
  color: #fff;
  text-decoration: none;
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
