<template>
  <div style="margin-top:160px ;margin-left:470px;">
    <p style="font-size:40px ;margin-bottom:0.5px;">Name: {{msg['name']}}</p>
    <p style="font-size:40px ;margin-bottom:0.5px;" >Phone: {{msg['phone']}}</p>
    <p style="font-size:40px ;margin-bottom:0.5px;" >Line ID: {{msg['line']}}</p>
    <p style="font-size:40px ;margin-bottom:0.5px;" >Number of books: {{getListBook.length}}</p>
    <p style="font-size:40px ;margin-bottom:0.5px;" >Number of group: {{allgroup.length}}</p>
    <a-button type="primary"  v-on:click="book()" >See All Of Your Book</a-button>
    <!-- {{msg}} -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters,mapMutations } from 'vuex';
export default {
  name: 'homep',
  data(){
    return {
      list: {},
      allgroup: null
    }
  },
  computed: {
    ...mapGetters(['getWho']),
    ...mapGetters(['getListBook'])
  },
  methods:{
    ...mapMutations(['setListBook']),
    book(){
            return this.$router.push({name: 'yourbook'})
    },
  },
  created(){
      this.list['id'] = this.getWho.id
      console.log(this.list)
      axios.post('http://localhost:3000/yourbook',this.list).then((res) => {
            console.log(res.data)
            this.setListBook(res.data)
          }).catch((err) => {
            console.log('error')
          })
        axios.post('http://localhost:3000/getg',this.list).then((res) => {
            this.allgroup = res.data
            console.log('..................................')
            console.log(this.allgroup)
            console.log('..................................')
            console.log(this.allgroup.length)
          }).catch((err) => {
            console.log('error')
          })
    },
  props: ["msg"]
}
</script>
