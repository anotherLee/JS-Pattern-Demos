/*
 * 1. 工厂模式是将new单独封装
 * 2. 如果遇到new时，就要考虑是否该用工厂模式
 * 3. 使用场景
 *   3.1 jQuery, 示例见下
 *   3.2 React.createElement，原理代码如下
 *   3.3 Vue.component()
 * 4. 原则验证
 *   4.1 构造函数和创建者分离
 *   4.2 符合开放封闭原则
 */

class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    console.log('init')
  }

  fn1() {
    console.log('fn1')
  }

  fn2() {
    console.log('fn2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

const creator = new Creator()
const p1 = creator.create('p1')
p1.init()
p1.fn1()


/*
 * jQuery示例
 */
class jQuery {
  constructor(selector) {
    const slice = Array.prototype.slice
    const domArray = slice.call(document.querySelectorAll(selector))
    const length = domArray ? domArray.length : 0
    for (let i=0; i<length; ++i) {
      this[i] = domArray[i]
    }
    this.length = length
    this.selector = selector
  }

  append(node) {

  }

  addClass(node) {

  }

  // ...
}

// 相当于creator
window.$ = function(selector) {
  return new jQuery(selector)
}


/*
 * React.createElement
 */
class Vnode {
  constructor(tag, attrs, children) {
    // ...
  }
}

// creator
React.createElement = function(tag, attrs, children) {
  return new Vnode(tag, attrs, children)
}
