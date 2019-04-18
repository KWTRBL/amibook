<template >
  <a-layout id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="getCurrentPage"
        :style="{ lineHeight: '64 vh'}"
      >
        <a-menu-item style="text-align: left;" >
          <img alt="Vue logo" 
              src="https://image.flaticon.com/icons/png/512/1631/1631263.png"
              style="width:5.5 vh; height:5.5vh"
          >
        </a-menu-item>
        <router-link to="/"></router-link>
        <a-menu-item key="profile" id='Profile' >
          <router-link to="/profile" style="font-family: 'Jua', sans-serif;font-size:1.15vw">Profile</router-link>
        </a-menu-item>
        <a-menu-item key="addbook" id='AddBook'>
          <router-link to="/addbook" style="font-family: 'Jua', sans-serif;font-size:1.15vw">AddBook</router-link> 
        </a-menu-item>
        <a-menu-item key="group" id='Group'>
          <router-link to="/group" style="font-family: 'Jua', sans-serif;font-size:1.15vw">Group</router-link> 
        </a-menu-item>
        <a-menu-item key="search" id='Search'>
          <router-link to="/search" style="font-family: 'Jua', sans-serif;font-size:1.15vw">Search</router-link> 
        </a-menu-item>
      </a-menu>
    </a-layout-header>
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
  background-image: url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)  ;
  
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
