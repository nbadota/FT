const str = `
    <html>
        <body>
            <div>第一个div</div>
            <p>这是p</p>
            <div>第二个div</div>
            <span>这是span</span>
            <div>第三个div</div>
        </body>
    </html>
`
// exec g
// function selectDiv(regExp, str){
//     let matches = []
//     while(true){
//         // console.log(regExp.lastIndex)
//         const match = regExp.exec(str)
//         // console.log(match)
//         if(match == null){
//             break
//         }
//         matches.push(match[1])
//     }
//     return matches
// }
const regExp = /<div>(.*)<\/div>/g
// const res = selectDiv(regExp, str)
// console.log(res)

// match
// console.log(str.match(regExp))

// replace
// function selectDiv(regExp, str){
//     let matches = []
//     str.replace(regExp, (all, first) => {
//         matches.push(first)
//     })
//     return matches
// }
// const res = selectDiv(regExp, str)
// console.log(res)

// matchAll
function selectDiv(regExp, str){
    let matches = []
    for(let match of str.matchAll(regExp)){
        matches.push(match[1])
    }
    return matches
}
const res = selectDiv(regExp, str)
console.log(res)