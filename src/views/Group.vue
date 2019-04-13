<template>
    <div style='margin-left: 20%; margin-right: 20%'>
        <h1>Group</h1>
        <h3 style="text-align: left">All groups in our community.</h3>
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
