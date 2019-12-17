<template>
  <div class="home">
    <ChannelsContainer />
    <div class="separator"></div>
    <PreviewContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChannelsContainer from '@/components/ChannelsContainer.vue'
import PreviewContainer from '@/components/preview/Container.vue'

export default Vue.extend({
  name: 'home',
  components: {
    ChannelsContainer,
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
  width: 95%;
  margin: auto;
  border: solid 1px $background-lighter
}
</style>
