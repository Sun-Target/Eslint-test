/*
 * @Author: sunrf
 * @Date: 2021-12-31 15:32:41
 * @LastEditors: sunrf
 * @LastEditTime: 2022-01-05 17:44:27
 * @Descripttion:
 * @FilePath: /study/vue-eslint-demo/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
