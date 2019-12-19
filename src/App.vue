<template>
  <div id="app">
    <TheToolbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheToolbar from '@/components/toolbars/TheToolbar.vue'

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
  max-height: 100vh;
  max-width: 100vw;
  height: 100%;
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

</style>
