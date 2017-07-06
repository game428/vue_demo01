<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
    width: 100%;
  }
  body{
    position: absolute;
    top:0rem;
    left: 0rem;
    right:0rem;
    bottom:0rem;
    margin:0rem;
    height: 100%;
    width: 100%;
    background:#333 url(images/1-1.jpg) no-repeat;
    background-size: cover;
  }
</style>
