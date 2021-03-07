/**
 * @description 常用文件夹路径
 * @author 双越
 */

const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const srcPath2 = path.join(__dirname)
const srcPath1 = path.join(__dirname,  'src')
const distPath = path.join(__dirname, '..', 'dist')

console.log(srcPath)
console.log(srcPath1)
console.log(srcPath2)

module.exports = {
    srcPath,
    distPath
}
