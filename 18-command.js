/*
 * 1. 概念：需要发送者、中间传递命令和接收者三个对象
 * 2. 应用：网页的富文本编辑器操作，浏览器封装了一个命令对象
 */

// 执行者
class Receiver {
  execute() {
    console.log('执行')
  }
}

// 传令者
class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  cmd() {
    console.log('让执行者执行命令')
    this.receiver.execute()
  }
}

// 发令者
class Invoker {
  constructor(command) {
    this.command = command
  }
  invoke() {
    console.log('发令')
    this.command.cmd()
  }
}

const soldier = new Receiver();
const trumpeter = new Command(soldier)
const general = new Invoker(trumpeter)
general.invoke()
