import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'
import  './firebase'



Vue.config.productionTip = false;

let app;


firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
          router,
          store,
          render: h => h(App)
      }).$mount('#app');
  }
})
