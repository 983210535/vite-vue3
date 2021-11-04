<template>
  <ul class="title">
    <router-link to="/" custom v-slot="{ isActive }">
      <li :class="{ active: isActive }" @click="changeRouter('/')">首页</li>
    </router-link>
    <router-link to="/newShop" custom v-slot="{ isActive }">
      <li :class="{ active: isActive }" @click="changeRouter('/newShop')">最新商品</li>
    </router-link>
    <router-link to="/hotShop" custom v-slot="{ isActive }">
      <li :class="{ active: isActive }" @click="changeRouter('/hotShop')">热门商品</li>
    </router-link>
    <router-link to="/shoppingCar" custom v-slot="{ isActive }">
      <li :class="{ active: isActive }" @click="changeRouter('/shoppingCar')">购物车</li>
    </router-link>
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

    function changeRouter(href) {
      router.push({
        path: href
      })
    }

    watch(() => router.currentRoute.value.name, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })
    onMounted(() => {
      console.log(router);
      console.log(router.currentRoute.value.path);
    })

    return {
      changeRouter
    }
  }
}
</script>

<style scoped>
.active {
  color: #FF6A00;
  background: #fff;
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
