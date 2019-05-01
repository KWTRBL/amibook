<template >
  <a-layout id="app">
    <a-layout-content >
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters(['getCurrentPage'])
  }
}
</script>

<style>
#app {
  font-family: 'Jua', sans-serif !IMPORTANT;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-position:center;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
