/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-16 09:22:20
 * @LastEditTime: 2022-01-19 08:47:32
 * @LastEditors: Gracia
 */

export function throttle(fn, delay) {
  let timer;
  const callback = function () {
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  }
  callback.delete = function () {
    timer = null;
  }
  return callback;
}