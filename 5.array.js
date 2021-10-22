// Массивы

const languages = ['Python', 'JavaScript', 'C', 'C++', 'Pascal']
const users = [
  {name: 'userName1', age: 10, createdAt: new Date()},
  {name: 'userName2', age: 25, createdAt: new Date()},
  {name: 'userName3', age: 42, createdAt: new Date()}
]
const functions = [() => {}, () => {}]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(languages[4])
// console.log(languages.length)
// languages.push('C#')
// console.log(languages)
// languages.unshift('Java')
// console.log(languages)

// const first = languages.shift()
// const last = languages.pop()
// console.log(first)
// console.log(last)

// console.log(numbers.reverse())
// console.log(numbers)

// console.log(languages.indexOf('C++'))
// console.log(languages.indexOf('C+'))
// const index = languages.indexOf('C')
// console.log(languages[index].firstName)

// const findedUserIndex = users.findIndex(function(user) {
//   return user.age === 25
// })
// console.log(findedUserIndex)

// const findedUser = users.find(function(user) {
//   return user.age === 25
// })
// console.log(findedUser)

// const findedUser = users.find((user) => user.age === 25)
// console.log(findedUser)

// const checkAge = (age) => (user) => user.age === age
//
// const findedUser = users.find(checkAge(25))
// console.log(findedUser)

// const newUsers = users.map(user => {
//   user.year = 2021 - user.age
//   return user
// })
// console.log(newUsers)

// console.log(languages.includes('C++'))

// const sumAge = users
//   .filter(user => user.age > 18)
//   .map(user => {
//     user.year = 2021 - user.age
//     return user
//   })
//   .reduce((acc, user) => acc + user.year, 0)
// console.log(sumAge)
