<template>
  <div id="app">
    <div class="header-container">
      <Toolbar />
    </div>
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '@/components/Toolbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Toolbar
  }
})
</script>

<style lang="scss">
@import url('./styles/app.scss');
#app {
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: $background;
}

.header-container {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}

.content-container {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 0 3%
}
</style>
