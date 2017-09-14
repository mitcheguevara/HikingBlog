<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
              <label>Camping</label>
              <input type="checkbox"value="Camping"v-model="blog.categories"/>
              <label>Hiking</label>
              <input type="checkbox"value="Hiking"v-model="blog.categories"/>
              <label>Travel</label>
              <input type="checkbox"value="Travel"v-model="blog.categories"/>
              <label>South America</label>
              <input type="checkbox"value="South America"v-model="blog.categories"/>
              <label>North America</label>
              <input type="checkbox"value="North America"v-model="blog.categories"/>
              <label>Europe</label>
              <input type="checkbox"value="Europe"v-model="blog.categories"/>
              <label>Asia</label>
              <input type="checkbox"value="Asia"v-model="blog.categories"/>
              <label>Africa</label>
              <input type="checkbox"value="Africa"v-model="blog.categories"/>
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
              <option v-for="author in authors">{{ author }}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="!submitted">
         <h3> Thanks for making a post </h3>
       </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
              <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author:{{ blog.author }}</p>

        </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author:''
            },
            authors:['Edwin','Chiarra','KRISTIN FRENDEWEY','Casey Schreiner', 'Jake From Statefarm', 'Elmo From Sesamea Street','The Lobby Security Lady','Loki The Neighborhood Gaurd Dog'],
            submitted:false,
        }
    },
    methods: {
      post: function(){
        this.$http.post('https://hiking-blog-mitche.firebaseio.com/posts.json', this.blog).then(function(data){
          console.log(data);
          this.submitted = true;
        });
      }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right:10px;
}
#checkboxes label{
  display:inline-block
}
</style>
