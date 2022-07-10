// includes -> boolean
// const arr = ['es6', 'es7', 'es8']
// console.log(arr.includes('es7'))
// console.log(arr.includes('es9'))
// console.log(arr.includes('es7', 1))
// console.log(arr.includes('es7', 2))
// console.log(arr.includes('es7', -1))
// console.log(arr.includes('es7', -2))

// console.log(arr.indexOf('es7'))
// console.log(arr.indexOf('es7') > -1)

// const arr = ['es6', ['es7', 'es8'], 'es9']
// console.log(arr.includes(['es7', 'es8'])) // false
// console.log(arr.indexOf(['es7', 'es8'])) // -1

const arr = ['es6', 'es7', NaN, 'es8', 2]
// console.log(arr.includes(NaN)) // true
// console.log(arr.indexOf(NaN)) // -1

console.log(arr.includes('2')) // false
console.log(arr.indexOf('2')) // -1