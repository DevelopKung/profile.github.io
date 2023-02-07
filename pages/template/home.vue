<template>
<div class="page-bg home">
  <div class="name-social">
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
}
</script>

<style lang="scss" scoped>
  .page-bg { width: 100%; min-height: 100vh; }
  .home {
    background: url("~/assets/img/hero-bg.jpg") top no-repeat;
    background-size: cover;
    position: relative;
  
    &:before {
      content: "";
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
    }
  
    .name-social {
      z-index: 2;
      width: 100%;
      position: absolute;
      top: 60%;
      left: 20%;
  
      .name {
        color: #45505b !important;
      }
    }
  
    .icon {
      cursor: pointer;
    }
  }
  
  @media only screen and (max-width: 600px) {
    .home {
      .name-social {
        text-align: center !important;
        left: unset;
      }
    }
  }
</style>
