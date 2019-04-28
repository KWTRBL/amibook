<template>
        <div id="login" style="  height: 100%;background-position:center;background-image: url(https://scontent.fbkk1-5.fna.fbcdn.net/v/t1.15752-9/59022624_393867608008046_8169876551249166336_n.png?_nc_cat=111&_nc_ht=scontent.fbkk1-5.fna&oh=f20bdde971991e87b61eaa4230a3f469&oe=5D390619)  ; ">
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


