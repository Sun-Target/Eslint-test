/*
 * @Author: sunrf
 * @Date: 2021-12-31 16:51:33
 * @LastEditors: sunrf
 * @LastEditTime: 2022-01-05 17:09:47
 * @Descripttion:
 * @FilePath: /study/vue-eslint-demo/src/utils/index.js
 */
export function test() {
  const { a, b, c } = { a: "123", b: "456", c: "789" };
  console.log(a, b, c);
  a = "789";
}
