<template>
<div>
  <div v-if="title" class="title mb-8">
    {{ title }}
    <v-divider></v-divider>
  </div>
  
  <div class="detail">
    <slot></slot>
  </div>
</div>
</template>

  
<script>
export default {
  props: {
    title: { type: String, default: '' }
  }
}
</script>

  
<style lang="scss" scoped>
.title {
  // border-bottom: 2px #bfbfbf solid;
  font-weight: bold;
  line-height: 1.5 !important;
  letter-spacing: 0.1em !important;
  text-align: left !important;
}
.detail { text-align: left !important; }
</style>
