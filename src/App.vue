<!--
 * @Author: sunrf
 * @Date: 2021-12-31 15:32:41
 * @LastEditors: sunrf
 * @LastEditTime: 2022-01-05 18:06:27
 * @Descripttion:
 * @FilePath: /study/vue-eslint-demo/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    aaa() {
      console.log(123);
      const { a, b, c } = { a: "123", b: "456", c: "789" };
      location.href = "123";
      console.log(a, b, c);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
