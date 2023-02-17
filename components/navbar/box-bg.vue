<template>
<div class="box">
  <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
  z-index: 1000;
  width: 100%;
  min-height: 100vh;
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
}
</style>
