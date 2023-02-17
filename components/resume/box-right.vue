<template>
<div>
  <div v-if="title" class="title mb-3 grey--text">
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
    title: {
      type: String,
      default: ""
    },
  },
};
</script>

  
<style lang="scss" scoped>
.title {
  // border-bottom: 1px #bfbfbf solid;
  font-weight: 300;
  line-height: 1.5 !important;
  letter-spacing: 0.2em !important;
  text-align: left !important;
}

.detail {
  text-align: left !important;
}
</style>
