/*
 * 获取数据
 */
function getGoodsList() {
  return $.get('./data.json').then((res) => {
    return res
  })
}

/*
 * 入口
 */

const app = new App($('app'))
app.init()
class App {
  constructor(id) {
    this.$el = $(id)
  }
  init() {
    console.log('init app')
  }
}


