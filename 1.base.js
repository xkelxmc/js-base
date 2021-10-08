// 1. Коментарии
/*
* Большой коментарий
* */
/**
 * Выделенный коментарий
 */

/** Более подробная информация
* https://shore-sea-7a2.notion.site/JS-db524994e83d4ec2b497bbee71c78a00
* */

/** 2. Объявление переменных */

// const countMoneyRUB = 100 //camelCase Основной
// const count_money = 100 //snakeCase

// const isEnabled = true; // boolean
// const _private = 'Private'
// const $ = ''
// const getCount$action = 'action' // универсальный разделитель
// const $element = document.getElementById('#element');

// const if = 'test' // error
// const while = 'test' // error

// const 4people = 4 //error
// const people4 = 4

/**  3. Взаимодейсвие */
//alert('Hello world!') // только для браузера
// const name = 'Ilya';
// const age = 25
// console.log('Hello world! ' + name + ' ' + age.toString())
// console.log('Hello world! ' + name + ' ' + age)
// console.log('Test value', age, name)
// console.log(age)
// console.log(age.toString())

// console.info('test info')
// console.warn('test warn')
// console.error('test error')

// console.dir({name})
// console.table(['1', '2', 2, 5])
// const table = [{text: '123', foo: '321'}, {text: '312', boo: 'bar'}]
// console.table([{text: '123', foo: '321'}, {text: '312', boo: 'bar'}])
// console.table({text: '123', foo: '321'})

/**  4. Операторы */
// const x = 100
// const y = 25

// const z = x + y
// console.log(z)
//
// let foo = 42;
// foo = foo + x;
// foo = foo - x;
// foo = foo * x;
// foo = foo / x;
// foo+=x;
// foo-=x;
// foo*=x;
// foo/=x;

// console.log(foo++)
// console.log(++foo)
// console.log(--foo)

/**  5. Типы данных */
// const isLoading = true //boolean
// const name = 'Name' //string
// const count = 42 //number
// let y
// let x = null
//
// console.log(typeof isLoading)
// console.log(typeof name)
// console.log(typeof count)
// console.log(typeof y)
// console.log(x)

/**  6. Приоритеты операторов */
// const age = 25
// const birthYear = 1996
// const currentYear = 2021
// let x
// const isFullAge = x = currentYear - birthYear <= age
// console.log(isFullAge)
// console.log(x)

/**  7. Условные операторы */

// const a = 42
// const b = '42'

/**  7.1 сравнение по типу '===', без учета типа '==' */
// console.log(a == b)
// console.log(a === b)

/**  7.2 Условный оператор 'if' */
// const state = 'complete' //complete inProgress fail
//
// if (state === 'inProgress') {
//   console.log('State is inProgress')
// } else if (state === 'complete') {
//   console.log('State is complete')
// } else {
//   console.log('fail')
// }
//
// const isLoading = true
//
// let x = 100;
// if (isLoading) {
//   console.log('loading...')
//   x++;
// } else {
//   console.log('complete!')
//   x--;
//   console.log('complete !!!!!')
// }
/**  7.3 Тернарный оператор
 * условие ? выражение1 : выражение2
 * */
// isLoading ? console.log('loading...') : x++
// console.log(isLoading ? 'loading...' : 'complete!')
//
// const isReady = true
// const isRequesting = false
//
// const bar = (isLoading && isReady && !isRequesting) ? 'inProgress' : 'complete'

/**  8. Функции */
// function printLog(/*параметры*/) {
//   // Тело функции
// }

// function printLog(text) {
//   console.log('LOG: ', text);
// }
// printLog('test')
//
// function sum(a, b) {
//   return a + b
// }
// const sumAB = sum(5, 4)
// console.log(sumAB)
// console.log(sum(5, 42))

// function sumAndCheck(a, b) {
//   const sum = a + b
//   if(sum > 20) {
//     console.log(a, b, 'SUM > 20, sum ' + sum)
//   } else {
//     console.warn(a, b, 'SUM <= 20, sum ' + sum)
//   }
// }
// sumAndCheck(10, 5)
// sumAndCheck(10, 55)

/**  9. Массивы */
// const index = 10;
// const countryCodes = ['RU', 'US', 'FR']
// // const countryCodes = new Array('RU', 'US', 'FR')
// console.log(countryCodes.length)
// console.log(countryCodes[0])
// console.log(countryCodes[2])
// console.log(countryCodes[555])
// countryCodes[0] = 'ru-RU'
//
// countryCodes[countryCodes.length] = 'fr-FR' // идентично с array.push(value)
// countryCodes[index] = 'fr-FR' // идентично с array.push(value)
// countryCodes.push('GP');
//
// console.log(countryCodes)

/**  10. Циклы */
// const countryCodes = ['RU', 'US', 'FR']

// while
// let i= 0
// while (i < 3) {
//   console.log(i)
//   i++
// }
// базовый цикл for
// for (let i = 0; i < countryCodes.length; i++) {
//   const code = countryCodes[i]
//   console.log(code);
// }
//
// // for of по все элементам
// for (const code of countryCodes) {
//   console.log(code)
// }
//
// // foreach
// countryCodes.forEach(code => console.log(code))

/**  11. Объекты */
// const userName = 'name'
// const userLastName = 'lastName'

// const user = new Object({})
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 42,
//   country: ['US', 'RU'],
//   print: function () {
//     console.log('print function', this.age)
//   },
//   printArrow() {
//     console.log('print function arrow', this.age)
//   },
//   print2: () => console.log('arrow')
// }
//
// class User {
//   name = ''
//   constructor(name) {
//     this.name = name
//   }
// }
//
// const a = new User('IVAN')

// console.log(user)
// user.print()
// user.printArrow()
// user.print2()
//
// console.log(user.age)
// console.log(user.firstName)
