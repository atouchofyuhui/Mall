import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: require("./assets/images/public/loading.jpg")
  loading:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZiZ3U639q0Q0vVtKwG5vt4UpounKLtCkPOAOgDe_PdF0T5Txnw&s",
  attempt: 1,
  throttleWait: 200
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
