<template>
<div>
  <v-row class="pa-4">
    <v-col class="pa-2 p-sm-0" cols="12" sm="12" md="4">
      <v-card class="block-profile" outlined>
        <div>
          <div class="pf-img">
            <v-img class="img" width="120" :src="require('~/assets/img/me.jpg')" aspect-ratio="1"></v-img>
          </div>
        </div>
        <div class="pf-data text-center">
          <h3>{{ data.full_name }}</h3>
          <v-card-subtitle class="pb-4 pt-0">{{ data.position }}</v-card-subtitle>

          <div v-for="(item,index) in data.contact" :key="index" class="pb-4 px-6 text-left d-flex">
            <v-icon color="primary" class="mr-4" v-text="item.icon"></v-icon>
            <div class="d-flex">
              <div><b>{{ item.title }}</b> <small>{{ item.value }}</small> </div>
            </div>
          </div>
        </div>
      </v-card>

      <v-card class="block-slill mt-2" outlined>
        <v-card-title>SKILL</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="auto" v-for="(item,index) in data.items" :key="index">
              <div class="pa-2 text-center">
                <img height="40" :src="item.img">
                <div>{{ item.text }}</div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="pa-2 p-sm-0" cols="12" sm="12" md="8">
      <v-card class="block-slill" outlined>
        <v-card-title>SKILL</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" v-for="(item,index) in data.skill" :key="index">
              <div class="pa-2">
                <img width="20" :src="item.img">
                <b class="ml-4"> {{ item.text }} </b>
                <v-progress-linear rounded :color="item.color" height="10" :value="item.power" striped></v-progress-linear>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="block-experience mt-2" outlined>
        <v-card-title>Experience</v-card-title>
        <v-card-text v-for="(item,index) in data.experience" :key="index">
          <v-card-title>{{ item.company }}</v-card-title>
          <v-card-subtitle>{{ item.date }}</v-card-subtitle>
          <div class="ml-4" v-for="(row,index) in item.detail" :key="index">
            <small>{{ row }}</small>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import data from '../static/data.json'

export default {
  data: () => ({
    data: data
  })
};
</script>
