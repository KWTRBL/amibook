<template>
  <div class="home" style="margin-left: 20%; margin-right: 20%;margin-top: 100px" >
    <img alt="Vue logo" 
    src="https://image.flaticon.com/icons/png/512/1631/1631263.png"
    style="width:130px; height:130px"
    >
    <br>
    <br>
      <p style="font-size:60px ;margin-bottom:0.5px;">Profile</p>
      <HelloWorld v-bind:msg="getWho"/>
      <!-- {{getWho}} -->
      <!-- <Card></Card> -->
      <!-- {{getWho}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/homep.vue'
// import Card from '@/componets/Card.vue'
import axios from "axios"
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'home',
  methods: {
    ...mapMutations(['setUsers'])
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['getWho']),
    // ...mapState(['users_lst'])
  }
}
</script>

<style>

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.color {
  color: rgb(68, 4, 243);
}


</style>

