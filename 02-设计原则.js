/*
 * 什么才是设计？
 *   1. 《Linux/Unix设计哲学》
 *     1.1 小即是美
 *     1.2 让每个程序只做好一件事
 *     1.3 快速建立原型
 *     1.4 舍弃高效率而取可移植
 *     1.5 让每个程序成为过滤器
 *     1.6 沉默是金
 * 五大设计原则SOLID
 *   1. S - 单一职责原则，一个程序只做好一件事，如果功能过于复杂就拆开，各个分部保持独立
 *   2. O - 开放封闭原则，对扩展开放、对修改封闭；增加需求时，扩展新代码，而非修改已有代码
 *   3. L - 李氏置换原则，子类能覆盖父类，父类能出现的地方子类就能出现；JS中使用较少
 *   4. I - 接口独立原则，保持接口独立，避免出现"胖接口"，JS中没有接口，使用较少
 *   5. D - 依赖倒置原则，面向接口编程，依赖抽象而不依赖具体；使用方只关注接口而不关注具体类的实现，JS中使用较少
 * 从设计到模式
 * 23种设计模式
 *  1. 创建型
 *    1.1 工厂模式（工厂方法模式，抽象工厂模式，建造者模式）
 *    1.2 单例模式
 *    1.3 原型模式
 *  2. 组合型
 *    1.1 适合器模式
 *    1.2 装饰器模式
 *    1.3 代理模式
 *    1.4 外观模式
 *    1.5 享元模式
 *    1.6 桥接模式
 *    1.7 组合模式
 *  3. 行为型
 *    1.1 策略模式
 *    1.2 模板方法模式
 *    1.3 观察者模式
 *    1.4 策略模式
 *    1.5 迭代器模式
 *    1.6 职责链模式
 *    1.7 命令模式
 *    1.8 状态模式
 *    1.9 备忘录模式、访问者模式、中介者模式、解释器模式
 */

function loadImage(src) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img')
    image.onload = function () {
      resolve(image)
    }
    image.onerror = function () {
      reject(image)
    }
    image.src = src
  })
}

const src = 'https:www.imooc.com/static/img/index/logo_new.png'
const result = loadImage(src)
/*
 * 每个then只做一件事情，其它的事情让下一个then来做
 */
result.then(image => {
  console.log(image)
  return image
}).then(image => {
  console.log(image)
}).catch(error => {
  console.log('加载失败')
})
