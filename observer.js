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

class Observer {
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
