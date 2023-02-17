<template>
<div>
  <Box>
    <v-card elevation="0">
      <div class="d-flex justify-space-between align-center">
        <v-card-title class="py-2">Experience</v-card-title>
        <div>
          <a href="resume.png" download>
            <v-btn color="primary" outlined small >
              <v-icon size="14" left>fa fa-upload</v-icon> print
            </v-btn>
          </a>
          <v-dialog v-model="openModalExample" width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#4a148c" outlined small v-bind="attrs" v-on="on">
                <v-icon size="14" left>fa fa-file-image</v-icon> example
              </v-btn>
            </template>
            <v-card outlined>
              <v-img src="resume.png"></v-img>
            </v-card>
          </v-dialog>
          <v-btn color="#4a148c" outlined small @click="$router.go(-1)">
            <v-icon size="14" left>fa fa-angle-left</v-icon> back
          </v-btn>
        </div>
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
  },
  data() {
    return {
      openModalExample: false
    }
  },
}
</script>

  
<style lang="scss" scoped>
</style>
