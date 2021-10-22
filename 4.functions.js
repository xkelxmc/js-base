//1. Функции

// Function Declaration
// function sum(a, b) {
//   console.log(a + b)
// }

// Function Expression
// let sum2 = function (a, b) {
//   console.log(a + b)
// }

// sum(10, 5)
// sum2(10, 5)

//2. Анонимные функции
// (() => {
//   console.log('test')
// })()

// console.log('init')
// setTimeout(function() {
//   console.log('setTimeout complete')
// }, 2000)
// let i = 0;
// const interval = setInterval(function() {
//   if(i > 3) {
//     clearInterval(interval);
//   } else {
//     console.log(i)
//     i++;
//   }
// }, 1000)

//3. Стрелочные функции
// function sum(a, b) {
//   console.log(a + b)
// }
//
// const arrow = (a, b) => {
//   console.log(a + b)
// }
//
// const arrow2 = (a, b) => console.log(a + b)
// const arrow3 = () => console.log('Test')
// const arrow4 = a => console.log('Test ' + a)
// const pow2 = num => num ** 2
//
// sum(5, 2)
// arrow(5, 2)
// arrow2(5, 2)
// arrow3()
// arrow4(5)
// pow2(5)

//4. Параметры по умолчанию
// const sum = (a, b) => a + b
// const sum2 = (a, b = 0) => a + b
// const sum3 = (a, b = a * 10) => a + b
//
// console.log(sum(42, 10))
// console.log(sum(42))
// console.log(sum2(42))
// console.log(sum3(5))

//5. Rest оператор
// https://shore-sea-7a2.notion.site/spread-cb5581b2faa245bba5465e24ec3c13ad

// function sumAll(...all) {
//   let res = 0
//   for(const num of all) {
//     res += num
//   }
//   return res
// }
//
// const sumAll2 = (...all) => all.reduce((acc, num) => acc + num, 0)
//
// const result = sumAll(1, 2, 3, 4, 5, 6, 100, 2000, -100)
// const result2 = sumAll2(1, 2, 3, 4, 5, 6, 100, 2000, 100)
// console.log(result)
// console.log(result2)

//6. Замыкания
// function listUsers(name) {
//   return function (secondName, age) {
//     console.log(`${name} - ${secondName} - age: ${age}`)
//   }
// }
//
// const usersListFunction = listUsers('Ivan')
// const usersListFunction2 = listUsers('Ivan2')
// usersListFunction('Popov', 24)
// usersListFunction('Popov2', 25)
// usersListFunction('Popov3', 42)
// usersListFunction2('Popov', 50)
// usersListFunction2('Popov2', 10)
