<template>
  <div class="home" style="margin-left: 20%; margin-right: 20%;margin-top: 10vh" >
    <img alt="Vue logo" 
    src="https://image.flaticon.com/icons/png/512/1631/1631263.png"
    style="width:20vh; height:20vh"
    >
    <br>
    <br>
      <p style="font-size:5vw ;margin-bottom:0.5vw;">Profile</p>
      <HelloWorld v-bind:msg="users_lst[0]"/>
      <!-- <Card></Card> -->
      <!-- {{who}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/homep.vue'
// import Card from '@/componets/Card.vue'
import axios from "axios"
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'home',
  data(){
    return {
      id: 0,
      pass: 0,
      lst: [
        {
          name: "nut",
          age: 20,

        },
        {
          name: "kaew",
          age: 20
        },
        {
          name:"Mesit Nakhum",
          phone:"0955075501",
          line:"panlopburi",
          numb: 420,
          numg: 3
        }
      ],
      n: 0,
      nw: 0,
      users_lst: null
    }
  },
  mounted(){
    axios.get("http://localhost:3000/test/").then((res) => {
      this.users_lst = res.data
    }).catch((error) => {
      console.log("error")
    })
  },
  methods: {
  },
  components: {
    HelloWorld
  },
  computed: {
    // ...mapGetters('getWho'),
    // ...mapState('who')
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

