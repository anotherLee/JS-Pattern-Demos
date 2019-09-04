/*
 * 1. 工厂模式是将new单独封装
 * 2. 如果遇到new时，就要考虑是否该用工厂模式
 */

class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    console.log('init')
  }

  fn1() {
    console.log('fn1')
  }

  fn2() {
    console.log('fn2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

const creator = new Creator()
const p1 = creator.create('p1')
p1.init()
p1.fn1()
