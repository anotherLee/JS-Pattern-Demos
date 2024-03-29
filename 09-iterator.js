/*
 * 1. 基本：可以顺序访问一个集合，使用者无需知道集合内部结构(封装)
 * 2. 实现：需要容器并生成迭代器，具体代码在下面，这些代码很重要
 * 3. 应用
 *   3.1 jQuery的each
 *   3.2 ES6的Iterator: 它实现了迭代器模式，针对有序数据集合：Array Map Set String TypedArray arguments NodeList
 *       1. 注意：Object不是有序数据集合，用next不确定能返回什么
 *       2. 以上数据类型，都有[Symbol.iterator]属性，属性值是一个函数，执行函数返回一个迭代器
 *       3. 这个迭代器有next方法可以顺序迭代子元素
 *       4. 可运行Array.prototype[Symbol.iterator]来测试
 *       5. 通过next() 获取值和是否遍历完成
 */

class Container {
  constructor(list) {
    this.list = list
  }

  getIterator() {
    return new Iterator(this)
  }
}

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }

  hasNext() {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }

  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
}

const arr = [1, 2, 3, 4, 'abc']
const container = new Container(arr)
const iterator = container.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next())
}
