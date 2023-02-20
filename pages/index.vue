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
    {{ lists }} {{ 1 }}
  </div>
</div>
</template>

<script>
import Typed from 'typed.js'
export default {
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    const typed = this.$refs.typed;
    new Typed(typed, {
      strings: ['Full Stack Developer', 'Frontend', 'Backend'],
      typeSpeed: 100,
      delaySpeed: 90,
      loop: true,
      showCursor: false
    });
  },
  async created(){
    let res = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos/1')
    this.lists = res
  }
};
</script>
