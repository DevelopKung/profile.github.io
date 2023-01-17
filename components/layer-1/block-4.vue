<template>
<div>

  <v-card>
    <div class="d-flex align-end pa-2">
      <h2>Framework</h2>
    </div>
    <v-list>
      <v-list-item v-for="(item, i) in data" :key="i">
        <v-list-item-icon>
          <v-img width="30" :lazy-src="item.img" :src="item.img"></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-progress-linear v-model="item.power" color="light-blue" height="16" striped>
            <strong>{{ Math.ceil(item.power) }}%</strong>
          </v-progress-linear>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
