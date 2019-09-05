/*
 * 1. 装饰器的功能：为对象添加新的功能；而且不改变原有的结构和功能
 * 2. 示例代码如下
 * 3. core-decorators 一个装饰器的库
 * 4. 感性的理解：手机壳
 */

class Circle {
  draw() {
    console.log('画图')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    // 原来的功能
    this.circle.draw()
    // 添加新的功能
    this.drawBorder()
  }

  drawBorder() {
    console.log('画边框')
  }
}

const circle = new Circle()
const decorator = new Decorator(circle)
decorator.draw()
