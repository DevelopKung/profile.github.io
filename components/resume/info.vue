<template>
<div>
  <Box :title="'INFO'">
    <div class="py-0 px-2 d-flex" v-for="(item,index) in data.contact" :key="index">
      <v-icon color="primary" class="mr-3" size="36" v-text="item.icon"></v-icon>
      <div class="grey--text">
        <b>{{ item.title }}</b>
        <div><small>{{ item.value }}</small></div>
      </div>
    </div>
    
    <div class="mt-5">
      <v-divider></v-divider>
      <v-row class="my-5">
        <v-col cols="auto" v-for="(item,index) in data.items" :key="index">
          <div class="pa-2 text-center">
            <img width="40px" :src="item.img">
            <div>{{ item.text }}</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </Box>
</div>
</template>

<script>
import Box from '@/components/resume/box-left.vue'
export default {
  components: {
    Box
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
