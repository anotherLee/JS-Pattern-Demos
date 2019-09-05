/*
 * 1. 定义：一个类全局只有一个对象，因为JS中没有private，所以无法完全实现
 * 2. 示例代表如下
 * 3. 应用
 *   3.1 jQuery中$只有一个，虽然实现不太一样，但是思想和单例是一样的
 *   3.2 登录框的显示和隐藏，示例代码
 *   3.3 购物车等
 *   3.4 vuex和redux里的store的实现也是单例
 */

// 示例代码
class SingleObject {

}

SingleObject.createInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance
  }
})()

// jQuery中的$
if (window.$) {
  // 使用window.$
} else {
  // 初始化
}

// 登录框显示和隐藏例子
class LoginUI {
  constructor() {
    this.isShow = false
  }

  show() {
    if (this.isShow) {
      console.log('登录框已显示')
      return
    }
    this.isShow = true
  }

  hide() {
    if (!this.isShow) {
      console.log('登录框已隐藏')
      return
    }
    this.isShow = false
  }
}

LoginUI.creatIntance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new LoginUI()
    }
    return instance
  }
})()
