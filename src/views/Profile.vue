<template>
  <div style=" height: 100%;background-position:center;background-image: url(https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.15752-9/57852350_981889328680554_8562290726489030656_n.png?_nc_cat=110&_nc_ht=scontent.fbkk2-5.fna&oh=9616fc7dbb57c331d6610a469bfb8bba&oe=5D398E04)  ; ">
    <div class="home"  >
      <!-- <img alt="Vue logo" 
      src="https://image.flaticon.com/icons/png/512/1631/1631263.png"
      style="width:130px; height:130px"
      > -->
      <br>
        <HelloWorld v-bind:msg="getWho"/>
        <!-- {{getWho}} -->
        <!-- <Card></Card> -->
        <!-- {{getWho}} -->
    </div>
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

