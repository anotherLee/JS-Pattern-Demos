/*
 * 获取数据
 */
const GET_LIST = './data.json'

function getGoodsList() {
  return $.get(GET_LIST).then((res) => {
    return res
  })
}

/*
 * Cart,用单例
 */
class Cart {
  constructor() {
    this.list = []
  }

  add(data) {
    this.list.push(data)
  }

  delete(id) {
    this.list = this.list.filter(item => item.id !== id)
  }

  getList() {
    return this.list.map(good => {
      return good.name
    }).join(' ')
  }
}

// 单例模式，只export出去getInstatnce，不export Cart，这样别人就只能通过getInstance拿到Cart的实例了
const getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new Cart()
    }
    return instance
  }
})()

/*
 * 购物车
 */
class ShoppingCart {
  constructor(app) {
    this.app = app
    this.$el = $('div')
    this.cart = getInstance()
  }

  init() {
    this.initButton()
    this.render()
  }
  initButton() {
    const $button = $('<button>购物车</button>')
    $button.click(() => {
      this.showCart()
    })
    this.$el.append($button)
  }
  showCart() {
    alert(this.cart.getList())
  }
  render() {
    this.app.$el.append(this.$el)
  }
}


/*
 * Item的状态，添加到购物车，从购物车删除等
 */
class State {
  constructor(itemState) {
    this.itemState = itemState
  }

  getState() {
    return this.itemState
  }

  setState(newState, handler) {
    this.itemState = newState
    handler.handle()
  }
}

class AddToCartHandler {
  constructor(context) {
    this.context = context
  }

  handle() {
    this.context.addToCart()
  }
}

class DeleteFromCartHandler {
  constructor(context) {
    this.context = context
  }

  handle() {
    this.context.deleteFromCart()
  }
}


/*
 * Item
 */
class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.cart = getInstance()
    this.$el = $('div')
  }

  init() {
    this.initContent() // 先初始化内容
    this.initButton() // 再初始化button
    this.render() // 最后一次性渲染
  }

  // 初始化button
  initButton() {
    const $el = this.$el
    const $button = $(`<button></button>`)
    const itemState = new State('加入购物车')

    function updateText(text) {
      $button.text(text)
    }

    updateText(itemState.getState())

    $button.click(() => {
      // 添加到购物车或者从购物车移除，这里用的状态模式
      if (itemState.getState() === '加入购物车') {
        itemState.setState('从购物车移除', new AddToCartHandler(this))
      } else {
        itemState.setState('加入购物车', new DeleteFromCartHandler(this))
      }
      updateText(itemState.getState())
    })
    $el.append($button)
  }

  // 初始化内容
  initContent() {
    const $el = this.$el
    const data = this.data
    $el.append($(`<p>名称：${data.name}</p>`))
    $el.append($(`<p>价格：${data.price}</p>`))
  }

  // 添加到购物车,这里可以使用装饰器进行效果增强
  // @log('add')
  addToCart() {
    this.cart.add(this.data)
  }

  // 从购物车删除，装饰器模式
  // @log('delete')
  deleteFromCart() {
    this.cart.delete(this.data.id)
  }

  // 渲染
  render() {
    this.list.$el.append(this.$el)
  }
}


/*
 * 工厂方法创建Item实例，在这里可以针对折扣进行处理
 */
function createItem(list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData)
  }
  return new Item(list, itemData)
}
// 使用代理模式
function createDiscount(itemData) {
  return new Proxy(itemData, {
    get: function(target, key, receiver) {
      if (key === 'name') {
        return `${target[key]}【折扣】`
      }
      if (key === 'price') {
        return target[key] * target.discount
      }
      return target[key]
    }
  })
}

/*
 * 列表
 */
class List {
  constructor(app) {
    this.app = app
    this.$el = $('div')
  }

  // 初始化
  init() {
    // 注意这一步，很厉害
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(() => {
      this.render()
    })
  }

  // 获取数据
  loadData() {
    return getGoodsList().then(res => {
      return res
    })
  }

  // 生成列表
  initItemList(data) {
    data.forEach(itemData => {
      // 创建一个Item并init它,这里使用工厂模式
      const item = createItem(this, itemData)
      item.init()
    })
  }

  // 渲染
  render() {
    this.app.$el.append(this.$el)
  }
}


/*
 * 入口
 */
class App {
  constructor(id) {
    this.$el = $('#' + id)
  }

  init() {
    this.initShoppingCart()
    this.initList()
  }

  // 初始化购物车
  initShoppingCart() {
    const shoppingCart = new ShoppingCart(this)
    shoppingCart.init()
  }

  // 初始化列表
  initList() {
    const list = new List(this)
    list.init()
  }
}

const app = new App('app')
app.init()

