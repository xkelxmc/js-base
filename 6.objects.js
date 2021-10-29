const user = {
  id: '123456',
  userName: 'Robot',
  isActor: true,
  actions: ['1 action', '2 action'],
  '2any key type2': 345,
  r: {
    1: { title: 'Играет', time: '12:00' },
    2: { title: 'Играет', time: '16:00' },
    3: { title: 'Не играет' }
  },
  checkActor() {
    return this.isActor
  },
  info() {
    console.log(this.id, this.userName, this.isActor, this.actions)
  }
}

/** Взаимодействие с объектами */

// console.log(user.userName)
// console.log(user.id)
// user.id = '654321';
// console.log(user.id)
// console.log(user['2any key type2'])
// const key = 'custom_key'
// user[key] = 'MY NEW KEY'
// console.log(user[key], user)
// user.actions.push('3 action');
// console.log(user.actions)
// console.log(user.r["1"].title)
// if(user.r["4"]) {
//   console.log(user.r["4"].title)
// }
// console.log(user.r["4"]?.title)
// console.log('строка')
// user.id = undefined
// console.log(user)
// delete user.id
// console.log(user)

// const {id, actions, userName, asdasd = 'default value', r} = user
// const {'1': one } = r
// const {'3': dsfsdfdsdsf } = r
//
// console.log(id)
// console.log(actions)
// console.log(userName)
// console.log(asdasd)
// console.log(one)
// console.log(dsfsdfdsdsf)
// console.log(user)
// for (const key in user) {
//   if(user.hasOwnProperty(key)) {
//     console.log(key)
//   }
// }

// Object.keys(user).forEach(key => {
//   console.log('key', key);
//   console.log('value', user[key]);
// })

/** Биндинг */
const logger = {
  keys() {
    console.log('Keys', Object.keys(this))
  },
  values() {
    Object.keys(this).forEach((key) => {
      console.log('key', key);
      console.log('value', user[key]);
    })
  },
  withParams(a = 42, b = 0, c = 100) {
    console.log(a, b, c)
    Object.keys(this).forEach((key) => {
      console.log('key', key);
    })
  }
}

const newObj = {
  a: 1234,
  b: 4321,
}

// logger.keys()
// const bound = logger.keys.bind(user)
// const bound2 = logger.keys.bind(newObj)
// bound()
// bound2()
// const bound = logger.values.bind(user)
// bound()

// logger.values.call(user)
// logger.withParams(10, 5, 42)
// logger.withParams.call(user, 10, 5, 42)
// logger.withParams.apply(user, [10, 5, 42])

