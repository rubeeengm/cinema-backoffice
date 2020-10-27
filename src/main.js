import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes/index";

Vue.config.productionTip = false;

// router config
Vue.use(VueRouter);

let router = new VueRouter({
	routes
});

new Vue({
	render: (h) => h(App)
	, router 
}).$mount("#app");
