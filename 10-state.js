import StateMachine from 'javascript-state-machine'

/*
 * 1. 一个对象有状态变化，每次状态变化都会触发一个逻辑，而且不能总是用if...else来控制
 * 2. 感性理解：红绿灯，示例代码如下
 * 3. 应用：
 *   3.1 有限状态机，使用javascript-state-machine
 *   3.2 写一个简单的Promise，代码如下：
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
  }
}

const context = new Context()

const red = new State('red')
const green = new State('green')
const yellow = new State('yellow')

red.handle(context)
console.log(`当前状态为${context.getState().color}`)
green.handle(context)
console.log(`当前状态为${context.getState().color}`)
yellow.handle(context)
console.log(`当前状态为${context.getState().color}`)

/*
 * 安装javascript-state-machine然后再运行下面的代码
 */
const fsm = new StateMachine({
  init: '收藏',
  transition: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 监听doStore
    onDoStore() {
      console.log('收藏成功')
    },
    // 监听deleteStore
    onDeleteStore() {
      console.log('取消收藏')
    }
  }
})

const div = document.getElementById('btn')
div.onclick = function () {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
}

/*
 * 写一个简单的Promise
 */
const fsm2 = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve(state, data) {
      data.successList.forEach(fn => fn())
    },
    onReject(state, data) {
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []
    fn(function resolve() {
      fsm.resolve(this)
    }, function reject() {
      fsm.reject(this)
    })
  }
  then(successFn, rejectFn) {
    this.successList.push(successFn)
    this.failList.push(rejectFn)
  }
}
