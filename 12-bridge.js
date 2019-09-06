/*
 * 将两种功能分开，然后可以进行组合，这样的组合就是桥接
 */

// 只有颜色
class Color {
  constructor(name) {
    this.name = name
  }
}

// 形状，并且组合颜色
class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  draw() {
    console.log(`颜色是：${this.color.name}, 形状是：${this.name}`)
  }
}

// 颜色
const red = new Color('red')
const green = new Color('green')
const yellow = new Color('yellow')

// 画一个红色的三角形
const redTriangle = new Shape('triange', red)
redTriangle.draw()

// 画一个绿色的矩形
const greenRectangle = new Shape('rectangle', green)
greenRectangle.draw()
