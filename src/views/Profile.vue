<template>
  <div class="home" style="margin-left: 20%; margin-right: 20%;margin-top: 10vh" >
    <img alt="Vue logo" 
    src="https://image.flaticon.com/icons/png/512/1631/1631263.png"
    style="width:20vh; height:20vh"
    >
    <br>
    <br>
      <p style="font-size:5vw ;margin-bottom:0.5vw;">Profile</p>
      <HelloWorld v-bind:msg="users_lst"/>
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
  mounted(){
    console.log('Mounted')
    axios.get("http://localhost:3000/test").then((res) => {
      // tmp = res.data
      this.setUsers(res.data)
      // console.log(res.data)
    }).catch((error) => {
      console.log("error")
    })
  },
  methods: {
    ...mapMutations(['setUsers'])
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['getWho']),
    ...mapState(['users_lst'])
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

