<template>
<div class="text-md-center">
  <v-avatar color="grey lighten-4" size="200">
    <!-- <img :src="require('~/assets/img/me.jpg')" /> -->
    <v-img :src="require('~/assets/img/me.jpg')" :lazy-src="require('~/assets/img/me.jpg')" aspect-ratio="1"></v-img>
  </v-avatar>
  <div class="name">
    <h2>ATIWAT SUTTISAK</h2>
    <small><b>TUMKUNG Developer</b></small>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.name {
  padding: 20px 0;
}
</style>
