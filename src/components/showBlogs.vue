<template>
  <div v-theme:="'narrow'" id="show-blogs">
    <!-- <div v-theme:column="'narrow'" id="show-blogs"> -->
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search"placeholder="search blogs"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link>
            <!-- <h2 v-rainbow>{{ blog.title |to-uppercase}}</h2> -->
            <article>{{ blog.content }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://hiking-blog-mitche.firebaseio.com/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
          var blogsArray = [];
          for(let key in data){
            data[key].id = key;
            blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
        });
    },
    computed:{
      filteredBlogs: function(){
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        });
      }
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
