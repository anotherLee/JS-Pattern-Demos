/*
 * 1. 介绍：使用者无权访问目标对象；需要通过代理来做授权和限制
 * 2. 感性理解：使用github.com；明星经纪人；
 * 3. 代理提供的方法和接口必须和被代理者完成一致，以供使用者访问，这是它和适配器的重要区别
 * 4. 应用
 *   4.1 网页事件代理
 *     当我们需要监听一个div里所有a标签的点击时候，不能给所有的a标签添加点击事件，可以给添加一个代理，这个代理给div添加监听事件，
 *     然后通过e.target进行判断来获取是否是a标签，并进行处理; 示例如下
 *   4.2 jQuery的$.proxy
 *   4.3 ES6 Proxy, 明星和经纪人，示例代码在下面
 * 5. 设计原则验证：代理类和目标类分离，符合开放封闭原则
 * 6. 代理模式和适配器模式、装饰器比较
 *   6.1 适配器模式提供不一样的接口；代理模式提供一样的接口
 *   6.2 装饰器扩展功能，不影响原有功能；代理模式直接针对原有功能
 */

class RealImg {
  constructor(filename) {
    this.filename = filename
    this.loadFromDisk()
  }

  loadFromDisk() {
    console.log('load...' + this.filename)
  }

  display() {
    console.log('display...' + this.filename)
  }
}

class ProxyImg {
  constructor(filename) {
    this.realImg = new RealImg(filename)
  }

  display() {
    // 展示被代理的信息，可以可以做各种各样的授权和限制
    this.realImg.display()
  }
}

const proxyImg = new ProxyImg('1.png')
proxyImg.display()

/*
 * <div id=div1>
 *   <a>1</a>
 *   <a>2</a>
 *   <a>3</a>
 * </div>
 */
const div1 = document.getElementById('div1')
div1.addEventListener('click', function(e) {
  const target = e.target
  if (target.nodeName === 'A') {
    console.log(target.innerHTML)
  }
})

/*
 * EE6的Proxy使用，完成明星和经纪人
 */

const star = {
  name: '张xx',
  age: 25,
  phone: 'star: 13900001111'
}

const agent = new Proxy(star, {
  // target就是star
  get: function(target, key) { // 这个key必须和star的接口是一样的，才符合规范
    if (key === 'phone') {
      return 'agent: 16800000000'
    }
    if (key === 'price') {
      return 120000
    }
    return target[key]
  },

  set: function(target, key, value) {
    if (key === 'customPrice') {
      throw new Error('价格太低')
    }
    target[key] = value
    return true
  }
})

const res = agent.phone
const name = agent.name
console.log(res, name)
