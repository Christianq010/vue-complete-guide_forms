import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-project-ff0eb.firebaseio.com/data.json';
// Functions on what we want execute on each request
Vue.http.interceptors.push((request, next) =>{
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {return {messages: response.body}}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
