<template>
        <div id="login" style="  height: 100%;background-position:center;background-image: url(https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.15752-9/58790261_419524932210467_7517835296637976576_n.png?_nc_cat=111&_nc_ht=scontent.fbkk2-6.fna&oh=454c9c22111642f4554d85c2169add6a&oe=5D7240DB)  ; ">
            <br>
            <!-- <a-button type="primary">Primary</a-button> -->
            <loginPanel />
            
        </div>
</template>

<script>
import loginPanel from '@/components/login.vue'
import axios from 'axios'
import { mapMutations } from 'vuex';
export default {
    components:{
        loginPanel
    },
    methods: {
        ...mapMutations(['setUsers'])
    },
    created(){
        axios.get("http://localhost:3000/users").then((res) => {
                // console.log(res)
                this.setUsers(res.data)
            }).catch((error) => {
                console.log("error")
        })
  },
}
</script >
<style >

</style>


