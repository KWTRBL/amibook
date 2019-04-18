<template>
    <div style='margin-left: 20%; margin-right: 20%;margin-top: 5vh'>
        <p style="font-size:5vw ;margin-bottom:0.1vw;" >Group</p>
        <p style="font-size:2vw ;margin-bottom:0.5vw;text-align: left">All groups in our community.</p>
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
