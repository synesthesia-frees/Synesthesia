<template>
  <div class="home">
    <StreamContainer />
    <div class="separator"></div>
    <PreviewContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StreamContainer from '@/components/stream/Container.vue'
import PreviewContainer from '@/components/preview/Container.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    StreamContainer,
    PreviewContainer
  }
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.separator {
  height: 0;
  width: 100%;
  margin: auto;
  border: solid 1px $background-lighter
}
</style>
