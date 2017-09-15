<template>
    <div>
      <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
      <img src="./assets/hiking-along-the-edge-near-tiniteqilaaq-visit-greenland.jpg">

<router-view></router-view>
            <!-- <show-blogs></show-blogs>
            <list-blogs></list-blogs>
        <add-blog></add-blog> -->
        <app-footer v-bind:title="title"></app-footer>

    </div>

</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import cover from './components/cover.vue';



export default {
    components: {
      'app-header': Header,
        'app-footer': Footer,
        'add-blog': addBlog,
        'show-blogs': showBlogs,
        'list-blogs': listBlogs,
        'cover': cover

    },
    data () {
        return {
          title: 'Hiking Blog'

        }
    },
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
    }
  }
}
</script>

<style>
img{
  width: 100%;
    height: auto;
}
body {
    margin: 0;
    font-family: 'Nunito SemiBold';
     background-color: #F6F6F6;
     -webkit-animation: random 5s infinite;
     animation: random 5s infinite;
}
/*@keyframes  random {
    15% { background-color: red; }
    30% { background-color: yellow; }
    45% { background-color: green; }
    60% { background-color: blue; }
    75% { background-color: white; }
}*/
</style>
