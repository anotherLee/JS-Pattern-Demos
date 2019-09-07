/*
 * 1. 职责链，一步操作可能分多个职责角色来完成;把这些角色分开，然后再用一个链串起来;将发起者和各个处理者隔离
 */

class Action {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }

  setNextAction(action) {
    this.nextAction = action
  }

  handle() {
    console.log(`${this.name}审批`)
    if (this.nextAction) {
      this.nextAction.handle()
    }
  }
}

let a1 = new Action('组长')
let a2 = new Action('经理')
let a3 = new Action('总监')
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()
