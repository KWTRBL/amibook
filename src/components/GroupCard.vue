<template>
  <div style="margin-top:210px;margin-left:240px">
    <a-row :gutter="1">
      <a-col :span="4">
        <a-card title="Group1" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 10%;margin-right: 10%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://i2.wp.com/www.casualoptimist.com/wp-content/uploads/2018/12/tess-of-the-road-cover-art-simon-prades.jpg?resize=620%2C959"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join1"  v-on:click="join1 = !join1;add(g1)" style="margin-top: 4%;" type="primary" size="medium">  Join  </a-button>
             <a-button v-else v-on:click="join1 = !join1;remove(g1)" style="margin-top: 4%;" type="danger " size="medium">Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card title="Group2" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 10%;margin-right: 10%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://i1.wp.com/www.casualoptimist.com/wp-content/uploads/2019/03/bird-king-design-helen-crawford-white.jpg?resize=620%2C919"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join2"  v-on:click="join2 = !join2;add(g2)" style="margin-top: 4%;" type="primary" size="medium">  Join  </a-button>
             <a-button v-else v-on:click="join2 = !join2;remove(g2)" style="margin-top: 4%;" type="danger " size="medium">Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card title="Group3" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 10%;margin-right: 10%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://i.pinimg.com/originals/b9/0d/56/b90d56623e94c6f8293ac7ae1f401b4d.png"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join3"  v-on:click="join3 = !join3;add(g3)" style="margin-top: 4%;" type="primary" size="medium">  Join  </a-button>
             <a-button v-else v-on:click="join3 = !join3;remove(g3)" style="margin-top: 4%;" type="danger " size="medium">Leave</a-button >
        </a-card>  
      </a-col>
      <a-col :span="4">
        <a-card title="Group4" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 10%;margin-right: 10%;margin-top:2%;"
        >
            <img
              alt="example"
              src="http://nexitcourier.com/wp-content/uploads/book-cover-art-book-cover-design-ideas-layout-fonts-and-how-to-create-one-1.jpg"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join4"  v-on:click="join4 = !join4;add(g4)" style="margin-top: 4%;" type="primary" size="medium">  Join  </a-button>
             <a-button v-else v-on:click="join4 = !join4;remove(g4)" style="margin-top: 4%;" type="danger " size="medium">Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card title="Group5" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 10%;margin-right: 10%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://i.pinimg.com/originals/87/47/99/8747993570a2acf91a2c3f95ea7763e0.jpg"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join5"  v-on:click="join5 = !join5;add(g5)" style="margin-top: 4%;" type="primary" size="medium">  Join  </a-button>
             <a-button v-else v-on:click="join5 = !join5;remove(g5)" style="margin-top: 4%;" type="danger " size="medium">Leave</a-button >
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { join } from 'path';
import axios from "axios"
import { mapGetters, mapMutations } from 'vuex';
export default {
  data(){
    return{
      join1: true,
      join2: true,
      join3: true,
      join4: true,
      join5: true,
      g1:"1",
      g2:"2",
      g3:"3",
      g4:"4",
      g5:"5",
      lst: {},
      lst2: {},
      allgroup: null,
    }
  },
  computed: {
    ...mapGetters(['getWho']),
  },
  methods:{
    add(val){
      console.log(val)
      this.lst['id']=this.getWho.id
      this.lst['group']=val
      console.log(this.lst)
      axios.post('http://localhost:3000/addg',this.lst).then((res) => {
            console.log('success')
          }).catch((err) => {
            console.log('error')
          })
    },
    remove(val){
      console.log(val)
      this.lst['id']=this.getWho.id
      this.lst['group']=val
      console.log(this.lst)
      axios.post('http://localhost:3000/removeg',this.lst).then((res) => {
            console.log('success')
          }).catch((err) => {
            console.log('error')
          })
    },
  },
  created(){
        this.lst2['id']=this.getWho.id
        axios.post('http://localhost:3000/getg',this.lst2).then((res) => {
            this.allgroup = res.data
            console.log('..................................')
            console.log(this.allgroup)
            console.log('..................................')
            console.log(this.allgroup.length)
            for(var i = 0 ; i < this.allgroup.length; i++){
              console.log(this.allgroup[i]['group'])
              if(this.allgroup[i]['group'] == 1){
                 this.join1 = false
              }
              else if(this.allgroup[i]['group'] == 2){
                this.join2 = false
              }
              else if(this.allgroup[i]['group'] == 3){
                this.join3 = false
              }
              else if(this.allgroup[i]['group'] == 4){
                this.join4 = false
              }
              else if(this.allgroup[i]['group'] == 5){
                this.join5 = false
              }
            }
          }).catch((err) => {
            console.log('error')
          })
    },

}
</script>

