<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer temporary persistent light v-model="drawer" overflow>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Tyler Rhinehart</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-1" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :href="item.href">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="changePage(item.title)">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="indigo darken-4" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Tyler Rhinehart</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <!-- <router-view></router-view> -->
        <!-- <div v-smoothscroll="{ duration : 500, context : undefined }"> -->
          <Home id="home"></Home>
        <!-- </div> -->
        <!-- <div v-smoothscroll="{ duration : 500, context : undefined }"> -->
          <Skills id="skills"></Skills>
        <!-- </div> -->
        <!-- <div v-smoothscroll="{ duration : 500, context : undefined }"> -->
          <Portfolio id="portfolio"></Portfolio>
        <!-- </div> -->
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import router from "./router"
  import Heading from './components/Header'
  import Home from './components/Home'
  import Skills from './components/Skills'
  import Portfolio from './components/Portfolio'

  export default {
    name: 'app',
    components: {
      Heading,
      Home,
      Skills,
      Portfolio
    },
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', href: '#home' },
          { title: 'Skills', icon: 'build', href: '#skills' },
          { title: 'Portfolio', icon: 'dashboard', href: '#portfolio' },
          { title: 'Resume', icon: 'insert_drive_file', href: '//tylerrhinehart.github.io/resume' }
        ],
        right: null
      }
    },
    methods: {
      changePage(page) {
        router.push('/' + (page == 'Home' ? '' : page))
      }
    }
  }

</script>

<style>
  main {
    background-image: url("https://static.pexels.com/photos/314726/pexels-photo-314726.jpeg");
    background-position-x: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-align: center;
    background-size: cover
  }
</style>