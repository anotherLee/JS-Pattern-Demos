/*
 * 1. 基本：可以顺序访问一个集合，使用者无需知道集合内部结构(封装)
 * 2. 实现：需要容器并生成迭代器，具体代码在下面，这些代码很重要
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
