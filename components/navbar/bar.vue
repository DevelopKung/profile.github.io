<template>
  <div>
    <div class="bar text-right pa-4">
      <v-btn class="icon" fab dark small :color="!drawer ? '#4A148C':''" @click="drawer =! drawer">
        <v-icon dark v-text="!drawer ? 'fas fa-bars':'fas fa-times'"></v-icon>
      </v-btn>
  
      <div class="bar-full-screen text-left" :class="!drawer?'slide-top':''">
        <div v-for="(item,index) in items" :key="index" class="mb-2">
          <div class="mb-2 bar-icon d-flex" @click="goto(item.link)">
            <v-icon class="icon" left dark> {{item.icon}} </v-icon>
            <span class="title">{{item.title}}</span>
          </div>
        </div>
      </div>
  
    </div>
    <slot></slot>
  </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      selectedItem: 1,
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/', type: "path" },
        { title: 'About', icon: 'mdi-account-star', link: '/about', type: "path" },
        // { title: 'Experience', icon: 'mdi-forum', link: '/experience', type: "path" },
        { title: 'Resume', icon: 'mdi-account-star', link: '/resume', type: "path" },
        // { title: 'Print', icon: 'mdi-printer', link: '/print', type: "event" },
      ],
    }),
    methods: {
      goto(path) {
        if (path) this.$router.push(path);
        this.drawer = false
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .bar { z-index: 10000; position: fixed; top: 0; right: 0;
    .icon { transition: all .2s ease-out; }
  }
  .slide-top { overflow: hidden; top: -10vh !important; height: 0px !important; }
  .bar-full-screen {
    z-index: 100;
    position: fixed;
    top: 30vh;
    left: 5vh;
    width: 100%;
    height: 100vh;
    transition: all .2s ease-out;
  
    .bar-icon {
      width: 62px;
      overflow: hidden;
      transition: .2s ease;
      padding: 18px 20px;
      background: #4A148C;
      border-radius: 30px;
  
      &:hover { cursor: pointer; width: 170px; padding: 14px 20px;
        .title { display: inline; }
      }
      .title { display: none; color: #fff; }
    }
  }
  
  
  @media only screen and (max-width: 960px) {
    .bar-full-screen { top: 26vh !important; }
    .slide-top { top: -10vh !important; height: 0px !important; }
  }
  
  </style>
  