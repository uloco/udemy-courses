const R = require('ramda')
const { compose, add, prop, concat } = R
const { log } = console

const user1 = { name: 'Michael', email: 'm@m.com' }

// log(prop('name', user1))
log(prop('name')(user1))

// const sayHello = (toWhom) => `Hello ${toWhom}`
const sayHello = concat('Hello')

// const getName = (user) => user.name
const getName = prop('name')

// const greeting = (user) => {
//   return sayHello(getName(user))
// }

// const greeting = (user) => sayHello(getName(user))
// log(greeting(user1))

const greets = compose(sayHello, getName)
log(greets(user1))

const greets2 = compose(concat('Hello '), prop('name'))
log(greets2(user1))

// currying
const twentyThree = add(10, 13)
const addTen = add(10)
const twoThree = addTen(13)

log(twentyThree, twoThree)
// ***

// backwards composition
// const comopse = (f, g) => (x) => f(g(x))
// const comopse = (f, g, h) => (x) => f(g(h(x)))

const f = x => 'f(' + x
const g = x => 'g(' + x
const h = x => 'h(' + x
const x = 'x)))'

log(f(g(h(x))))
log(compose(f, g, h)(x))
