<template>
  <div id="app">
    <navbar></navbar>
    <heading></heading>
    <skills></skills>
    <portfolio></portfolio>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Heading from './components/Heading'
  import Skills from './components/Skills'
  import Portfolio from './components/Portfolio'

  export default {
    name: 'app',
    components: {
      Navbar,
      Heading,
      Skills,
      Portfolio
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    background: url("https://static.pexels.com/photos/314726/pexels-photo-314726.jpeg") no-repeat center center fixed;
  }
</style>