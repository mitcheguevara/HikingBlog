<template>
<main>

  <div v-theme:="'narrow'" id="cover">

  <nav>
    <ul>
      <li><router-link to="/show" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a New Blog</router-link></li>
    </ul>
  </nav>
    </div>
    <div id="app">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <router-view></router-view>

  </div>
</main>

</template>
<script>

</script>

<style>
#cover{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 100%;
    height: auto;
}
</style>
