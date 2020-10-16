// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Search.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({ 
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
        path:'/about',
        name:'About',
        component: About,
    },
  ],
});

export default RouterVue;