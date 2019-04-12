<template>
  <a-layout id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">About</router-link> 
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/detail">Detail</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/addbook">AddBook</router-link> 
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <router-view/>
  </a-layout>
</template>

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
