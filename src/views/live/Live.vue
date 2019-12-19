<template>
  <div class="home">
    <div ref="streamContainer" class="stream-container">
      <StreamContainer />
    </div>
    <SeparatorAdjustable :beforeElement="getStreamContainer"/>
    <div class="preview-container">
      <PreviewContainer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StreamContainer from '@/components/stream/Container.vue'
import SeparatorAdjustable from '@/components/utils/SeparatorAdjustable.vue'
import PreviewContainer from '@/components/preview/Container.vue'

export default Vue.extend({
  name: 'LiveHomeView',
  components: {
    StreamContainer,
    SeparatorAdjustable,
    PreviewContainer
  },
  methods: {
    getStreamContainer () {
      return this.$refs.streamContainer
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}

.stream-container {
  display: flex;
  align-items: stretch;
  height: 30%;
  min-height: 20%;
  max-height: 30%;
}

.preview-container {
  display: flex;
  align-items: stretch;
  height: 70%
}
</style>
