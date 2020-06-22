<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, onMounted, onActivated } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    onActivated(() => {
      console.log('on-activated-h')
    })
    onMounted(() => {
      console.log('onMounted-h')
    })
  }
})
</script>
