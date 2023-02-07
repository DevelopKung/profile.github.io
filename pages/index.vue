<template>
<div class="page-index">
  <v-container>
    <v-card class=" pa-2" outlined>
      <div class="box" @click="$router.push('./template#home')">
        <b>PROFILE</b>
      </div>
    </v-card>
  </v-container>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-index {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px !important;
    width: 200px;
    height: 100px;
    cursor: pointer;
    border: 1px solid #eee;
    background: #BA68C8;
    color: #fff;
  }
}
</style>
