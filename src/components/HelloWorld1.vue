<!--
 * @Author: sunrf
 * @Date: 2021-12-31 15:32:41
 * @LastEditors: sunrf
 * @LastEditTime: 2022-01-05 17:57:53
 * @Descripttion:
 * @FilePath: /study/vue-eslint-demo/src/components/HelloWorld1.vue
-->
<template>
  <div
    id="div"
    :key="1"
    ref="div"
    class="hello"
    name="hhh"
    style=""
    @click="() => {}"
  >
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld1",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  mounted() {
    const a = 1;
    const o = {
      a: 1
    };
    const c = {
      ...o,
      a: 2
    };

    const d = {
      a: 1,
      b: "2"
    };

    console.log(a, c, d, c, f);
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
