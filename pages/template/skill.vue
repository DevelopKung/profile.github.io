<template>
<div v-if="data" class="page-skill pa-4">
  skill
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.page-skill {
  width: 100%;
  min-height: 100vh;
}
</style>
