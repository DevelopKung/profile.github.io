<template>
<div>
  <Box>
    <v-card elevation="0">
      <v-card-title>Skill and Expertize</v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="px-6" cols="12" sm="6" v-for="(item,index) in data.skill" :key="index">
            <img width="20" :src="item.img" :class="index == 0?'mb-2':''">
            <b class="ml-4"> {{ item.text }} </b>
            <v-progress-linear rounded :color="item.color" height="10" :value="item.power" striped></v-progress-linear>
          </v-col>
        </v-row>
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
