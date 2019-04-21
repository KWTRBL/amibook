<template >
  <a-list
    itemLayout="vertical"
    size="large"
    :pagination="pagination"
    :dataSource="getListBook"
    style="font-family: 'Jua', sans-serif;text-align:left;"
  >
      <div>{{msg}}</div>
        <a-list-item slot="renderItem" slot-scope="item" key="item['Book Name']">
        <template slot="actions" >
        </template>
        <img slot="extra" width="272" height="300" alt="logo" :src= "'data:image/jpeg;base64,'+item.img" />
        <!-- {{item.img}} -->
          <p style="font-size:30px ;">Book Name: {{item['Book Name']}}</p>
          <p style="font-size:30px ;">from user: {{item.id}}</p>
          <a-avatar slot="avatar" src="https://img.icons8.com/bubbles/50/000000/book.png" />
          <p style="font-size:30px ;" v-if="item.Author != None" > Author: {{item.Author}}</p>
          <p style="font-size:30px ;" v-else > Author: - </p>
          <p style="font-size:20px ;" v-if="item.Note != None" >Note: {{item.Note}}</p>
          <a-button type="primary"  v-on:click="contact(item.id)" >See Contact</a-button>
        </a-list-item>
  </a-list>
</template>

<script>
import axios from 'axios'
import { mapGetters} from 'vuex';
export default {
  data () {
    return {
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
    }
  },
  computed: {
    ...mapGetters(['getListBook']),
  },
  methods:{
    contact(val){
      // console.log(val)
      var value = []
      value.push(val)
      // console.log(value)
      axios.post('http://localhost:3000/contact',value).then((res) => {
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