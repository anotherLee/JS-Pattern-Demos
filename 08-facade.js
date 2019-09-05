/*
 * 1. 外观模式，针对多个接口和功能使用高层接口进行统一管理，使用的时候只用高层接口
 * 2. 比如针对不同元素的事件绑定，以前自己用过
 * 3. jQuery用的极多
 */

function bindEvents(ele, type, selector, fn) {
  // 针对可能出现的情况进行处理
  if (fn == null) {
    fn = selector
    selector = null
  }
  // 再进行功能的统一书写
}

bindEvents(ele, 'click', '#app', fn)
bindEvents(ele, 'click', fn)
