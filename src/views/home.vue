<template>
  <h1>home</h1>
  <h2>{{ num }}</h2>
  <button @click="addNum">add</button>
  <button @click="add2333">2333</button>
  <h2>{{ double }}</h2>
  <h2>{{ oneNum }}</h2>
  <h2 @click="jump" style="color: pink">jump</h2>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
// import $store from '../store/index'
export default {
  setup() {
    const store = useStore()
    const num = computed(() => store.state.num)
    const addNum = () => store.commit('add')
    const add2333 = () => store.dispatch('aFunc', '2333')
    const oneNum = computed(() => store.getters.double)
    // const num = computed(() => $store.state.num)

    const route = useRoute()
    const router = useRouter()

    function jump() {
      console.log(route);
      console.log(route.query);
      router.push({
        name: 'play',
        params: {
          name: "123",
          like: "456"
        }
      })
    }

    return {
      num,
      double: computed(() => store.getters.double),
      addNum,
      add2333,
      oneNum,
      jump
    }
  }
  
}
</script>

<style>

</style>