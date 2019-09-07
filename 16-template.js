/*
 * 把多个方法集合在一个方法里执行
 */

class Action {
  handle() {
    this.handle1()
    this.handle2()
    this.handle3()
  }
  handle1() {
    console.log(1)
  }
  handle2() {
    console.log(2)
  }
  handle3() {
    console.log(3)
  }
}
