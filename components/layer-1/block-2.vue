<template>
<div>
  <v-card>
    <v-list v-if="data && data.length > 0" two-line>
      <div v-for="(row, index) in data" :key="index">
        <v-list-item class="">
          <v-list-item-icon>
            <v-icon color="indigo"> {{row.icon}} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{row.title}}</v-list-item-title>
            <v-list-item-subtitle>{{row.value}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="(data.length - 1) !== index"></v-divider>
      </div>

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
