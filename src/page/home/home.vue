<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link to="/login">
        <span>{{login}}</span>
    </router-link>
    <router-link to="/item">
      <span>{{item}}</span>
    </router-link>
    <router-link to="/item1">
      <span>{{item1}}</span>
    </router-link>
    <router-link to="/item2">
      <span>{{item2}}</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '第一个demo',
      login: 'login',
      item: '开始答题',
      item1: 'item1',
      item2: 'item2'
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
