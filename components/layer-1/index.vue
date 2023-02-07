<template>
<div class="profile">
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <Layout1 v-if="profile" :data="profile" />
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <Layout2 v-if="profile" :data="profile.contact" />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <Layout3 v-if="profile" :data="profile.items" />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <Layout4 v-if="profile" :data="profile.skill" />
    </v-col>
  </v-row>
</div>
</template>

<script>
import data from './../../static/data.js'
import Layout1 from './block-1.vue'
import Layout2 from './block-2.vue'
import Layout3 from './block-3.vue'
import Layout4 from './block-4.vue'

export default {
  components: { Layout1, Layout2, Layout3, Layout4 },
  data: () => ({
    profile: data,
    layout: 1
  }),
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 1rem;
}
</style>
