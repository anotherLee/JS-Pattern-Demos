/*
 * 1. 解决需求：面对相应的接口不符合自己的需要，针对这个接口进行再次封装，就是适配器
 * 2. 好处：避免修改原来的代码所产生的问题
 * 3. 示例代码
 * 4. 应用：
 *   4.1 封装旧的接口
 *   4.2 vue的计算属性都是适配器
 *   4.3 axios就是一个大的适配器
 */

// 适配器模式示例
class adaptee {
  func() {
    return '原来旧的东西'
  }
}

class adaptor {
  constructor(adaptee) {
    this.adaptee = adaptee
  }

  func() {
    const primaryFunc = this.adaptee.func()
    return primaryFunc + " 进行处理过的功能"
  }
}
