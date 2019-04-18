<template>
  <div >
    <p style="font-size:2.5vw ;margin-bottom:0.5vw;">Name: {{msg['name']}}</p>
    <p style="font-size:2.5vw ;margin-bottom:0.5vw;" >Phone: {{msg['phone']}}</p>
    <p style="font-size:2.5vw ;margin-bottom:0.5vw;" >Line ID: {{msg['line']}}</p>
    <p style="font-size:2.5vw ;margin-bottom:0.5vw;" >Number of books: {{msg['numb']}}</p>
    <p style="font-size:2.5vw ;margin-bottom:0.5vw;" >Number of group: {{msg['numg']}}</p>
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
