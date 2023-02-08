<template>
<div>
  <div class="home-page">
    <h1 class="name">Atiwat Suttisak</h1>
    <h2 class="typed mb-2" ref="typed"></h2>
    <div class="social-links">
      <v-icon class="mr-2 icon" large color="primary">fab fa-facebook</v-icon>
      <v-icon class="mr-2 icon" large color="error">fab fa-instagram</v-icon>
      <v-icon class="mr-2 icon" large color="success">fab fa-line</v-icon>
    </div>
  </div>
</div>
</template>

<script>
import Typed from 'typed.js'
export default {
  mounted() {
    const typed = this.$refs.typed;
    new Typed(typed, {
      strings: ['Full Stack Developer', 'Frontend', 'Backend'],
      typeSpeed: 100,
      delaySpeed: 90,
      loop: true,
      showCursor: false
    });
  }
};
</script>
