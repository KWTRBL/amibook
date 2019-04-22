<template>
    <div style='margin-left: 20%; margin-right: 20%;margin-top: 50px'>
        <p style="font-size: 60px ;margin-bottom:0.5px; ">YourBook</p>
        <Lib/>
        
    </div>
</template>

<script>
import axios from 'axios'
import Lib from '@/components/libB.vue'

export default {
    components:{
        Lib
    },
    
    
}
</script>