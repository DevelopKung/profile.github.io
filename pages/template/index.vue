<template>
  <div>
    <NavBar>
      <div id="home" ref="home">
        <Home />
      </div>

      <div id="about" ref="about">
        <About :data="lists" />
      </div>

      <div id="skill" ref="skill">
        <Skill />
      </div>
    </NavBar>
  </div>
</template>

  
<script>
import { mapActions, mapGetters } from 'vuex'
import NavBar from "../../components/navbar/bar";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
export default {
  components: { NavBar, Home, About, Skill, },
  methods: {
    path(item) {
      var element = this.$refs[item.ref];
      element.scrollIntoView();
    },
  },
  computed: {
    ...mapGetters({
      lists: 'template/lists'
    }),
  },
  methods: {
    ...mapActions({
      loadData: 'template/loadData'
    }),
  },
  async created() {
    await this.loadData()
  },
};
</script>

  
<style lang="scss" scoped>
* { scroll-behavior: smooth; }
</style>
