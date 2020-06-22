<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import MHeader from '@/components/m-header/m-header.vue'
import Tab from '@/components/tab/tab.vue'

const tabList = reactive([
  { name: '推荐', to: '/recommend' },
  { name: '歌手', to: '/singer' },
  { name: '排行', to: '/rank' },
  { name: '搜索', to: '/search' }
])
export default defineComponent({
  components: { MHeader, Tab },
  setup () {
    return {
      tabList
    }
  }
})
</script>
<style lang="stylus">
</style>
