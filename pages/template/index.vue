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
        <Skill :data="lists" />
      </div>
    </NavBar>
  </div>
</template>

  
<script>
import NavBar from "../../components/navbar/bar";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import data from './../../static/data.json'
export default {
  components: { NavBar, Home, About, Skill, },
  data() {
    return {
      lists: data
    }
  },
  methods: {
    path(item) {
      var element = this.$refs[item.ref];
      element.scrollIntoView();
    },
  },
};
</script>

  
<style lang="scss" scoped>
* { scroll-behavior: smooth; }
</style>
