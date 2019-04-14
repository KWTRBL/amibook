<template>
  <a-layout id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="getCurrentPage"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="home" id='Home' >
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="about" id='About'>
          <router-link to="/about">About</router-link> 
        </a-menu-item>
        <a-menu-item key="login" id='Login' >
          <router-link to="/login">Login</router-link>
        </a-menu-item>
        <a-menu-item key="addbook" id='AddBook'>
          <router-link to="/addbook">AddBook</router-link> 
        </a-menu-item>
          <a-menu-item key="group" id='Group'>
        <router-link to="/group">Group</router-link> 
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '10vh' }">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCurrentPage'])
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
