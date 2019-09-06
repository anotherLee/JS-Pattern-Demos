/*
 * 1. 概念：clone自己，生成一个新对象
 */

const prototype = {
  getName() {
    return this.firstName + ' ' + this.lastName
  },
  greet() {
    console.log('hello')
  }
}

// 基于原型创建a
const a = Object.create(prototype)
a.firstName = 'Bob'
a.lastName = 'Lee'
console.log(a.getName())
a.greet()

// 基于原型创建b
const b = Object.create(prototype)
b.firstName = '张'
b.lastName = '丽'
console.log(b.getName())
b.greet()
