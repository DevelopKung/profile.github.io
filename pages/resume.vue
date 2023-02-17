<template>
<div class="page-print">
  <v-card outlined>
    <v-row no-gutters>
      <v-col class="bg-left" cols="12" sm="4">
        <div class="infor">
          <Avatar />
          <Info :data="data" />
        </div>
      </v-col>

      <v-col class="bg-right" cols="12" sm="8">
        <div class="infor-right">
          <Experience :data="data" />
          <Skill-Expertize :data="data" />
        </div>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
import Avatar from '../components/resume/avatar.vue';
import Experience from '../components/resume/experience.vue';
import Info from '../components/resume/info.vue';
import SkillExpertize from '../components/resume/skill-expertize.vue';
import data from '../static/data.json'
export default {
  components: { Avatar, Info, SkillExpertize, Experience },
  layout: "blank",
  data: () => ({
    data: data
  }),
};
</script>

<style lang="scss" scoped>
.page-print {
  min-height: 100vh;
  padding: 0 10rem;
  .bg-left {
    z-index: 5;
    width: 100%;
    min-height: 120vh;
    background: url("~/assets/img/hero-bg.jpg") top no-repeat;
    background-size: cover;
    position: relative;

    &:before {
      content: "";
      background: rgba(255, 255, 255, 0.856);
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
    }

    .infor {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      padding: 10px 10px !important;
      height: 100% !important;
    }
  }

  .bg-right {
    .infor-right {
      padding: 0 1rem 0 1rem;
    }
  }

}

@media only screen and (max-width: 960px) {
  .page-print {
    padding: 0 0 !important;
  }
}
</style>
