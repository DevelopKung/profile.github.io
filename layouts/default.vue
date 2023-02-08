<template>
<v-app>
  <Navbar>
    <BoxBg>
      <Nuxt />
    </BoxBg>
  </Navbar>
</v-app>
</template>

<script>
import Navbar from "../components/navbar/bar.vue";
import BoxBg from "../components/navbar/box-bg.vue";
export default {
  components: { Navbar, BoxBg, },
}
</script>

<style lang="scss" scoped>

</style>
