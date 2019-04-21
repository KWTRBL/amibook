<template >
  <a-layout id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '20 px'}"
      >
        <router-link to="/"></router-link>
        <a-menu-item key="profile" id='Profile' >
          <router-link to="/profile" style="font-family: 'Jua', sans-serif;font-size:25px">
            <img alt="Vue logo" 
                src="https://image.flaticon.com/icons/png/512/1631/1631263.png"
                style="width:40px; height:40px"
            >
          </router-link>
        </a-menu-item>
        <a-menu-item key="addbook" id='AddBook'>
          <router-link to="/addbook" style="font-family: 'Jua', sans-serif;font-size:25px">AddBook</router-link> 
        </a-menu-item>
        <a-menu-item key="group" id='Group'>
          <router-link to="/group" style="font-family: 'Jua', sans-serif;font-size:25px">Group</router-link> 
        </a-menu-item>
        <a-menu-item key="search" id='Search'>
          <router-link to="/search" style="font-family: 'Jua', sans-serif;font-size:25px">Search</router-link> 
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
