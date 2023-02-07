<template>
<div class="page-index">
  <v-container>
    <v-card class=" pa-2" outlined>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <div class="box ma-1" @click="$router.push('./template#home')">
            <b>PROFILE</b>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div class="box ma-1" @click="$router.push('./template#home')">
            <b>RESUME</b>
          </div>
        </v-col>
      </v-row>
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
    width: 100%;
    height: 100px;
    cursor: pointer;
    border: 1px solid #eee;
    background: url("https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg");
    color: #fff;
  }
}

</style>
