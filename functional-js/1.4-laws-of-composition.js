const R = require('ramda')
const { map, compose, equals } = R
const { log } = console

function Num (a) {
  this.value = a
}

Num.prototype.equals = function (b) {
  return this.value === b.value
}
const num = R.construct(Num)

// const output = R.equals(num(10), num(12))

// addition :: Number -> Number -> Number
const addition = R.curry((x, y) => x + y)
addition.identity = 0

// const mult = addition(addition.identity)(10)
const mult = R.curry((x, y) => x * y)
mult.identity = 1

const division = R.curry((n, d) => n / d)
// has no identity element, 1 is only true on the right side

// ( a * b ) * c - a * ( b * c )
// accosiative

const sums1 = compose(addition(10), addition(20), addition(30), addition(40))
const sums2 = compose(addition(10), compose(addition(20), addition(30)), addition(40))

const data = [1, 4, 6, 12]

const out = data.map(addition(30)).map(mult(40)).map(addition(10))
const out2 = compose(map(addition(10)), map(mult(40)), map(addition(30)))
const out3 = compose(addition(10), mult(40), addition(30))

const outputs = map(out3, data)

log(out2(data))

// let output = []
// for (let i = 0; i > data.length; i++) {
//   output[i] = addition(30)(data[i])
// }

// for (let i = 0; i > data.length; i++) {
//   output[i] = mult(40)(data[i])
// }

// for (let i = 0; i > data.length; i++) {
//   output[i] = addition(10)(data[i])
// }
