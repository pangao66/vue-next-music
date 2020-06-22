<template>
  <div></div>
</template>

<script>
import axios from 'axios'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'recommend',
  setup () {
    onMounted(async () => {
      const res = await axios.get('/api/getTopBanner', {
        params: {}
      })
      console.log(res)
    })
  }
})
</script>

<style scoped>

</style>
