<template>
<div class="profile">
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <Block1 v-if="profile" :data="profile" />
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <Block2 v-if="profile" :data="profile.contact" />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <Block3 v-if="profile" :data="profile.items" />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <Block4 v-if="profile" :data="profile.skill" />
    </v-col>
  </v-row>
</div>
</template>

<script>
import data from './../static/data.js'
import Block1 from '../components/layer-1/block-1.vue'
import Block2 from '../components/layer-1/block-2.vue'
import Block3 from '../components/layer-1/block-3.vue'
import Block4 from '../components/layer-1/block-4.vue'

export default {
  components: { Block1, Block2, Block3, Block4 },
  data: () => ({
    profile: data
  }),
  async created() {
    // let res = await this.$axios.$get('/static/data.json')
    // console.log(res);
  },
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 1rem;
}
</style>
