const R = require('ramda')
const { concat, reduceRight } = R
const { log } = console

// function composeN (...fns) {
//   return (x) => {
//     let output = x
//     let l = R.length(fns)
//     while (l--) {
//       output = fns[l](output)
//     }
//     return output
//   }
// }

function composeN (...fns) {
  return (x) => {
    return R.reduce((output, fn) => {
      return fn(output)
    }, x, R.reverse(fns))
  }
}

const n = 99.9999
log(n.toFixed(2))
log(typeof n.toFixed(2))

const fixedTwo = composeN(n => n / 100, parseInt, R.multiply(100))
log(fixedTwo(n))

function compose (...fns) {
  return x => reduceRight((fn, output) => fn(output), x, fns)
}

// const t = compose(concat('h'), concat('e'), concat('l'), concat('l'), concat('o'))
const t = compose(
  concat('h'), compose(
    concat('e'), compose(
      concat('l'), compose(
        concat('l'), compose(
          concat('o')))))
)

log(t('!!!!!!'))
