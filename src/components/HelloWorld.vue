<template>
  <div>
    <h1>Name {{msg['name']}}</h1>
    <h2 v-if="age">Age {{msg['age']}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      age: false
    }
  },
  props: ["msg"]
}
</script>
