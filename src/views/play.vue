<template>
  <h1 @click="jump">play</h1>
  <mySetup :isnum="num"></mySetup>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { ref, watch } from 'vue'
import mySetup from "../components/mySetUp.vue"
export default {
  components: { mySetup },
  setup() {
    const num = ref(2333)
    const route = useRoute()
    const router = useRouter()
    watch(num, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })
    return {
      num,
      jump: () => {
        console.log(route.params);
        console.log(num.value);
        num.value += 111
      }
    }
  }
}
</script>

<style>

</style>