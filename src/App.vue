<template>
    <div>
      <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
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
// import updateBlog from './components/updateBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';


export default {
    components: {
      'app-header': Header,
        'app-footer': Footer,
        'add-blog': addBlog,
        // 'update-blog': updateBlog,
        'show-blogs': showBlogs,
        'list-blogs': listBlogs

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
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
