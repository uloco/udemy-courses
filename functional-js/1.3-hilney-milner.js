const R = require('ramda')
const { compose, concat } = R
const { log } = console

const trace = x => log(x) || x

function HayStack (needle) {
  this.needle = R.toUpper(needle)
}

// const haystack = (needle) => new HayStack(needle)

// haystack :: String -> HayStack
const haystack = R.construct(HayStack)

// getNeedle :: HayStack -> String
const getNeedle = R.prop('needle')

// concatTo :: String -> String
const concatTo = R.flip(concat)

// whatWeFound :: String -> String
const whatWeFound = compose(concat('Hay Hey, we found a '), concatTo(' in a haystack!'))
log(whatWeFound('money'))

// needleFromHaystack :: HayStack -> String
const needleFromHaystack = compose(whatWeFound, getNeedle)
log(haystack('foo'))

// tediousWork :: String -> String
const tediousWork = compose(trace, needleFromHaystack, trace, haystack)
tediousWork('foo')

// map :: (a -> b) -> [a] -> [b]
const map = R.map

// intoHayStacks :: [String] -> [HayStacks]
const intoHayStacks = map(haystack)

log(map(haystack)(['diamond', 'old coin', 'my wallet', 'hay']))

// someFunc :: (a -> Bool) -> [a] -> [a]
const someFunc = (aToBool) => (as) => R.filter(aToBool, as)

// greaterThan50 :: Number -> Bool
const greaterThan50 = R.flip(R.lt)(50)

// map :: Functor f -> (a -> b) -> f a -> f a
