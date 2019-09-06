/*
 * 1. 一个对象有状态变化，每次状态变化都会触发一个逻辑，而且不能总是用if...else来控制
 * 2. 感性理解：红绿灯，示例代码如下
 * 3. 应用：
 *   3.1 有限状态机
 *   3.2 写一个简单的Promise
 */

// 存储状态，红灯、黄灯、绿灯
class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`已经切换到了${this.color}`)
    context.setState(this)
  }
}

// 主体，根据状态改变来执行相应的逻辑
class Context {
  constructor() {
    this.state = null
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    // 在这里就可以做各种各样的事情了
  }
}

const context = new Context();

const red = new State('red')
const green = new State('green')
const yellow = new State('yellow')

red.handle(context)
console.log(`当前状态为${context.getState().color}`)
green.handle(context)
console.log(`当前状态为${context.getState().color}`)
yellow.handle(context)
console.log(`当前状态为${context.getState().color}`)

