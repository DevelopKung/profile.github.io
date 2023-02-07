<template>
<div>
  <div v-if="false" class="bar text-right pa-4">
    <div class="d-inline d-sm-none">
      <v-icon class="icon" @click="drawer = true" large :color="!drawer ? 'primary':''" v-text="!drawer ? 'fas fa-bars':'fas fa-times'"></v-icon>
      <v-navigation-drawer class="d-inline d-sm-none" v-model="drawer" absolute temporary>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link @click="goto(item.link)">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-title>{{ item.title }} </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-navigation-drawer>
    </div>
  </div>

  <div class="bar text-right pa-4">
    <v-icon class="icon" @click="drawer =! drawer" large :color="!drawer ? 'primary':''" v-text="!drawer ? 'fas fa-bars':'fas fa-times'"></v-icon>

    <div class="bar-full-screen text-left d-none d-sm-inline" :class="!drawer?'slide-top':''">
      <div v-for="(item,index) in items" :key="index" class="mb-2">
        <div class="mb-2 bar-icon d-flex" @click="goto(item.link)">
          <v-icon class="icon" left dark> {{item.icon}} </v-icon>
          <span class="title">{{item.title}}</span>
        </div>
      </div>
    </div>

    <div class="bar-mobile-screen text-left d-flex d-sm-none" :class="!drawer?'slide-left':''">
      <div v-for="(item,index) in items" :key="index" class="mb-2 mx-2">
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
    items: [{
        title: 'Home',
        icon: 'mdi-home',
        link: '/template#home',
        ref: 'home'
      },
      {
        title: 'About',
        icon: 'mdi-forum',
        link: '/template#about',
        ref: 'about'
      },
      {
        title: 'Skill',
        icon: 'mdi-account-star',
        link: '/template#skill',
        ref: 'skill'
      },
      {
        title: 'Back',
        icon: 'mdi-backspace',
        link: '/',
      },
    ],
  }),
  methods: {
    goto(path) {
      // this.$emit('path', path)
      if (path) this.$router.push(path);
    }
  },
}
</script>

<style lang="scss" scoped>
.bar {
  z-index: 10000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;

  .icon {
    transition: all .2s ease-out;
  }
}

.slide-top {
  overflow: hidden;
  top: -10vh !important;
  height: 0px !important;
}

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
    background: #9C27B0;
    border-radius: 30px;

    &:hover {
      cursor: pointer;
      width: 150px;
      padding: 14px 20px;

      .title {
        display: inline;
      }
    }

    .title {
      display: none;
      color: #fff;
    }
  }
}

.slide-left {
  overflow: hidden;
  left: -20% !important;
  width: 0 !important;
}

.bar-mobile-screen {
  z-index: 100;
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 10%;
  display: flex;
  transition: all .2s ease-out;

  .bar-icon {
    width: 62px;
    overflow: hidden;
    transition: .2s ease;
    padding: 18px 20px;
    background: #9C27B0;
    border-radius: 30px;

    &:hover {
      cursor: pointer;
      width: 150px;
      padding: 14px 20px;

      .title {
        display: inline;
      }
    }

    .title {
      display: none;
      color: #fff;
    }
  }
}
</style>
