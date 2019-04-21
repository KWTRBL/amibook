<template>
    <div style='margin-left: 20%; margin-right: 20%;margin-top: 10vh'>
        <p style="font-size:60px ;margin-bottom:0.00000001vw;" >Group</p>
        <p style="font-size:30px ;margin-bottom:0.5vw;text-align: left">All groups in our community.</p>
        <Group/>
    </div>
</template>
<script>
import Group from "@/components/GroupCard.vue"
export default {
    components: {
        Group
    }
    
}
</script>
