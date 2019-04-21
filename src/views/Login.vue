<template>
    <div style="margin-top: 35vh;">
        <p style="font-size:60px ;margin-bottom:0.5vh; ">Login</p>
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
<style scoped>

</style>


