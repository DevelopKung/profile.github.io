<template>
<div>
  <Box>
    <v-card elevation="0">
      <div class="d-flex justify-space-between align-center">
        <v-card-title class="py-2">Experience</v-card-title>
        <a href="resume.png" download>
          <v-btn color="primary" text >
            <v-icon size="14" left>fa fa-upload</v-icon> print
          </v-btn>
        </a>
      </div>
      <v-card-text class="py-0" v-for="(item,index) in data.experience" :key="index">
        <v-card-title class="py-2">{{ item.company }}</v-card-title>
        <v-card-subtitle>{{ item.date }}</v-card-subtitle>
        <div class="ml-4" v-for="(row,index) in item.detail" :key="index">
          <small>{{ row }}</small>
        </div>
      </v-card-text>
    </v-card>
  </Box>
</div>
</template>

  
<script>
import Box from '@/components/resume/box-right.vue'
export default {
  components: { Box },
  props: {
    data: { type: Object, default: () => {} }
  }
}
</script>

  
<style lang="scss" scoped>
</style>
