<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Tools</h2>
    <ul>
      <li><router-link :to="{ name: 'JsonEditor' }">JsonEditor</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Xiongbingchao\'s Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
