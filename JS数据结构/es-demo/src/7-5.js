// node: global
// web : window self

// self.setTimeout(()=>{
//     console.log('es2020')
// }, 1000)

const getGlobal = () => {
    if (typeof self !== 'undefined') {
        return self
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global !== 'undefined') {
        return global
    }
    throw new Error('无法找到全局对象')
}
const global = getGlobal()
console.log(global)

console.log(globalThis)