<template>
    <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
      <nav>
      <ul>
        <li><router-link to="/" exact>Cover</router-link></li>
        <li><router-link to="/show" exact>Blog</router-link></li>
        <li><router-link to="/add" exact>Add a New Blog</router-link></li>

      </ul>
    </nav>
    </header>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    },
    methods: {
      changeTitle: function(){
        this.$emit('changeTitle', 'Get Out There');
      }
    }
}
</script>
<style scoped>
header{
    background: #585858;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #DE1B1B;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
