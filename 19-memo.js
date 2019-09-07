/*
 * 1. 概念：随时记录一个对象的状态变化；随时可以恢复之前的某的状态如撤销功能
 */

class Memento {
  constructor(content) {
    this.content = content
  }
  getContent() {
    return this.content
  }
}

// 备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }
  add(memento) {
    this.list.push(memento)
  }
  get(index) {
    return this.list[index]
  }
}

class Editor {
  constructor() {
    this.content = null
  }
  setContent(content) {
    this.content = content
  }
  getContent() {
    return this.content
  }
  saveContentToMemo() {
    return new Memento(this.content)
  }
  getContentFromMemo(memo) {
     this.content = memo.getContent()
  }
}

const editor = new Editor()
const careTaker = new CareTaker()
editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemo()) // 备份222
editor.setContent('333')
careTaker.add(editor.saveContentToMemo()) // 备份333
editor.setContent('444')

console.log(editor.getContent())
editor.getContentFromMemo(careTaker.get(1)) // 撤销
console.log(editor.getContent())
editor.getContentFromMemo(careTaker.get(0)) // 撤销
console.log(editor.getContent())
