<template>
  <div id="app">
    <TheToolbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheToolbar from '@/components/TheToolbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    TheToolbar
  }
})
</script>

<style lang="scss">
@import url('./styles/app.scss');

#app {
  height: 100%;
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

</style>
