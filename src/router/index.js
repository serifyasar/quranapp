import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Ayetler from '../views/Ayetler.vue'
import Login from '../views/auth/Login.vue'
import store from '../store'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
      meta:{
      requiresAuth:true
      }
  },
    {
        path: '/login',
        name: 'Login',
        component: Login,

    },

    {
        path: '/ayetler',
        name: 'Ayetler',
        component: Ayetler,
        meta:{
            requiresAuth:true
        }
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

router.beforeEach((to, from, next)=>{

    let currentUser=store.state.currentUser;
    let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
    if(requiresAuth && !currentUser){
        next('login');
    }else{
        next();
    }
});