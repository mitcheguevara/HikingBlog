import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
// import updateBlog from './components/updateBlog.vue';
import singleBlog from './components/singleBlog.vue';

export default [
  {path:'/',component:showBlogs},
  {path:'/add',component:addBlog},
    // {path:'/update',component:updateBlog},
  {path:'/blog/:id',component:singleBlog}
]
