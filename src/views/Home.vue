<template>
  <div class="home" v-bind:style="{ 'background-image': 'url(https://media.npr.org/assets/img/2015/11/18/book-awards-istock_wide-a4a7c12ac40b55e1ca11447536309bdee14841ac.jpg?s=1400)' }">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>nut</p>
    <h1>nut</h1>
    <input type="text" v-model='id'>
    <input type="password" v-model="pass">
    <br>
    <p style='text-align: left; '>{{id}}</p>
    <br>
    <p class='right'>{{pass}}</p>
    <ul>
      <li v-for='x in lst' v-bind:key='x'> 
        {{x}} 
      </li>
    </ul>
    {{n}}
    <br>
    <button v-on:click='plus'>Increment</button>
    <button v-on:click='minus'>Decrement</button>
    <br>
    <input type="text" v-model="nw">
    <button v-on:click="add">add</button>
    <!-- <HelloWorld v-bind:msg='lst[1]'></HelloWorld> -->
    <HelloWorld v-for="x in lst" v-bind:key="x" v-bind:msg="x"/>
    <!-- <Card></Card> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Card from '@/componets/Card.vue'

export default {
  name: 'home',
  data(){
    return {
      id: 0,
      pass: 0,
      lst: [
        {
          name: "nut",
          age: 20
        },
        {
          name: "kaew",
          age: 20
        }
      ],
      n: 0,
      nw: 0
    }
  },
  methods: {
    plus(){
      this.n++
    },
    minus(){
      this.n--
    },
    add(){
      this.lst.push(this.nw)
    }
  },
  components: {
    HelloWorld
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

