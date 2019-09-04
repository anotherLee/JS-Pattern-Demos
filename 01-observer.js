/*
 * 1. 观察者模式也叫发布订阅模式
 * 2. 它需要主题和订阅者两部分，订阅者可以为很多个，订阅者需要绑定到主题上
 * 3. 使用场景：
 *   3.1 所有的事件监听
 *   3.2 Promise实现
 *   3.3 jQuery callbacks
 *   3.4 Nodejs自定义事件
 *   3.5 vue和react组件生命周期触发
 *   3.6 vue的watch机制
 * 4. 原则验证：主题和观察者分离，不是主动触发而是被动监听，两者解耦
 */

class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    // 更新state后直接发布
    this.observers.forEach(observer => {
      observer.update()
    })
  }

  add(observer) {
    this.observers.push(observer)
  }
}

class 01 {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.add(this)
  }

  update() {
    console.log(`新的内容更新了，是${this.subject.getState()}`)
  }
}

const subject = new Subject()
const o1 = new Observer('我是o1', subject)
subject.setState(10)
