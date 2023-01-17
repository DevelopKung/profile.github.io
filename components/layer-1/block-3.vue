<template>
<div>
  <v-card>
    <v-list>
      <v-list-item v-for="(item, i) in data" :key="i">
        <v-list-item-icon>
          <v-img width="30" :lazy-src="item.img" :src="item.img"></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-action>
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
