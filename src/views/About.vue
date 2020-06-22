<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onActivated } from 'vue'

export default defineComponent({
  setup () {
    onActivated(() => {
      console.log('on-activated-a')
    })
    onMounted(() => {
      console.log('on-mounted-a')
    })
  }
})
</script>
