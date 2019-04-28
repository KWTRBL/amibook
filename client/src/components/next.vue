<template >
  <a-list
    itemLayout="vertical"
    size="large"
    :pagination="pagination"
    :dataSource="getListBook"
    style="font-family: 'Jua', sans-serif;padding:20px;margin-top:80px;margin-left:200px;"
  >
      <div>{{msg}}</div>
        <a-list-item slot="renderItem" slot-scope="item" key="item['BookName']">
          <a-Row :gutter="0">
            <a-Col :span="12">
              <p style="font-size:30px ;">Book Name: {{item['BookName']}}</p>
            <p style="font-size:30px ;">from user: {{item.id}}</p>
            <p style="font-size:30px ;" v-if="item.Author != None" > Author: {{item.Author}}</p>
            <p style="font-size:30px ;" v-else > Author: - </p>
            <p style="font-size:25px ;"  v-if="item.id == getWho.id"> It's Your Book! </p>
            <p style="font-size:20px ;" v-if="item.Note != None" >Note: {{item.Note}}</p>
            <a-button type="primary" v-if="item.id != getWho.id" v-on:click="contact(item.id)" >See Contact</a-button>
            </a-Col>
            <a-Col :span="12">
            <img v-if="item.img != None"  width="272" height="300"  :src= "'data:image/jpeg;base64,'+item.img" />
            </a-Col>
          </a-Row>  
        
        <!-- {{item.img}} -->
        </a-list-item>
  </a-list>
</template>

<script>
import axios from 'axios'
import { mapGetters} from 'vuex';
export default {
  data () {
    return {
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 1,
      },
    }
  },
  computed: {
    ...mapGetters(['getListBook']),
    ...mapGetters(['getWho'])
  },
  methods:{
    contact(val){
      // console.log(val)
      var value = []
      value.push(val)
      // console.log(value)
      axios.post('http://0.0.0.0:3000/contact',value).then((res) => {
            // console.log(res.data)
              this.$swal({
                title: "Name:" + res.data[0]['name'],
                text: "Phone:"+ res.data[0]['phone'] + "   " + "Line:" + res.data[0]['line'] ,
                type: 'success',
              }).then((result) => {
              })
          }).catch((err) => {
            console.log('error')
          })

    }
  }
}
</script>
<style>

</style>