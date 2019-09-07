/*
 * 1. 不同策略分开处理，而不是通过if...else糅合在一起
 * 2. 避免出现大量if..else或者switch..case
 */

/*
 * 有问题的代码
 */
class User {
  constructor(type) {
    this.type = type
  }
  buy() {
    if (this.type === 'ordinary') {
      console.log('普通购买')
    } else if (this.type === 'member') {
      console.log('会员用户购买')
    } else if (this.type === 'vip') {
      console.log('vip购买')
    }
  }
}

const u1 = new User('ordinary')
const u2 = new User('member')
const u3 = new User('vip')
u1.buy()
u2.buy()
u3.buy()


/*
 * 优化的代码
 */
class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}

class MemberUser {
  buy() {
    console.log('会员购买')
  }
}

class VipUser {
  buy() {
    console.log('vip购买')
  }
}

new OrdinaryUser().buy()
new MemberUser().buy()
new VipUser().buy()
