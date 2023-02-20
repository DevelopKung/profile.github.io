<template>
  <div>
    <Box>
      <v-card elevation="0">
        <div class="d-flex justify-space-between align-center">
          <v-card-title class="py-2">Experience</v-card-title>
          <div>
            <v-menu v-model="menu" transition="slide-y-transition" :close-on-content-click="false" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn :elevation="0" color="#4a148c" fab oulined small dark v-bind="attrs" v-on="on">
                  <v-icon size="24">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-card outlined>
                <div class="pa-1">
                  <v-dialog v-model="openModalExample" width="600">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="#4a148c" text small v-bind="attrs" v-on="on">
                        <v-icon size="14" left>fa fa-file-image</v-icon> example
                      </v-btn>
                    </template>
                    <v-card outlined>
                      <v-img src="resume.png"></v-img>
                    </v-card>
                  </v-dialog>
                </div>
                <div class="pa-1">
                  <a href="resume.png" download>
                    <v-btn color="#4a148c" text small >
                      <v-icon size="14" left>fa fa-upload</v-icon> print
                    </v-btn>
                  </a>
                </div>
                <div class="pa-1">
                  <v-btn color="#4a148c" text small @click="$router.go(-1)">
                    <v-icon size="14" left>fa fa-angle-left</v-icon> back
                  </v-btn>
                </div>
              </v-card>
            </v-menu>
          </div>
        </div>
        <v-card-text class="py-0" v-for="(item,index) in data.experience" :key="index">
          <v-card-title class="py-2">{{ item.company }}</v-card-title>
          <v-card-subtitle>{{ item.date }}</v-card-subtitle>
          <div class="ml-4" v-for="(row,index) in item.detail" :key="index">
            <small>{{ row }}</small>
          </div>
        </v-card-text>
      </v-card>
    </Box>
  </div>
  </template>
  
    
  <script>
  import Box from '@/components/resume/box-right.vue'
  export default {
    components: { Box },
    props: {
      data: { type: Object, default: () => {} }
    },
    data() {
      return {
        openModalExample: false,
        menu: false
      }
    },
  }
  </script>
  
    
  <style lang="scss" scoped>
  a {  text-decoration: none; }
  </style>
  