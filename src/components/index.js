/*
 * @Author: sunrf
 * @Date: 2022-01-05 15:26:20
 * @LastEditors: sunrf
 * @LastEditTime: 2022-01-05 16:26:30
 * @Descripttion:
 * @FilePath: /study/vue-eslint-demo/src/components/index.js
 */
export function test() {
  const { a, b, c } = { a: "123", b: "456", c: "789" };
  console.log(a, b, c);
  a = "789";
}
