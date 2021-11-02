<template>
  <h1 @click="getData">getData</h1>
  <h1>
    <!-- {{ isnum }} -->
    {{ isnum }}
  </h1>
  <ul>
    <li v-for='item in arr' :key='item.name'>
      姓名： {{ item.name }}
      年龄： {{ item.age }}
    </li>
  </ul>
</template>

<script>
import { ref, toRefs, onMounted, watch } from 'vue'
export default {
  props: {
    isnum: {
      type: Number,
      required: true
    },
  },
  setup(props) {
    const { isnum } = toRefs(props)
    console.log(props);
    console.log(isnum);

    let arr = ref([])
    const getData = () => {
      const data = [
        {
          name: 'jack',
          age: 18
        },
        {
          name: 'lily',
          age: 18
        }
      ]
      arr.value = data
    }

    onMounted(() => {
      console.log(`onmounted`);
    })

    watch(isnum, (newVal, preVal) => {
      console.log(newVal, preVal);
    })
    return {
      arr,
      getData,
    }
    
  }
}
</script>

<style>

</style>