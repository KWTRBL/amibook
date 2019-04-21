<template>
  <div >
    <p style="font-size:30px ;margin-bottom:0.5px;">Name: {{msg['name']}}</p>
    <p style="font-size:30px ;margin-bottom:0.5px;" >Phone: {{msg['phone']}}</p>
    <p style="font-size:30px ;margin-bottom:0.5px;" >Line ID: {{msg['line']}}</p>
    <p style="font-size:30px ;margin-bottom:0.5px;" >Number of books: {{msg['numb']}}</p>
    <p style="font-size:30px ;margin-bottom:0.5px;" >Number of group: {{msg['numg']}}</p>
    <!-- {{msg}} -->
  </div>
</template>

<script>
export default {
  name: 'homep',
  data(){
    return {
      age: true
    }
  },
  props: ["msg"]
}
</script>
