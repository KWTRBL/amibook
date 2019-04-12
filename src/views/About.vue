<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="Go">Go detail</button>
  </div>
</template>

<script>
export default {
  methods: {
    Go(){
      this.$router.push({name: 'login'})
    }
  }

}
</script>

