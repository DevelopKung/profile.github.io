<template>
<div>
  <v-card class="text-center pa-4">
    <div class="d-flex flex-column align-center">
      <v-img :lazy-src="data.image" :src="data.image"></v-img>
    </div>
    <div>
      <h2>{{ data.nickname }}</h2>
    </div>
    <div>{{ data.position }}</div>
  </v-card>
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
