// const a = 2
// const b = 3
// console.log(a + b) // 同步任务
// // 异步任务
// setTimeout(() => {
//     console.log(a + b)
// }, 1000)

// 前后端数据分离   前端 <->  后端  ajax
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000)
// console.log(3)

// 1 3 2
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0)
// console.log(3)

// 伪代码
// setTimeout(()=>{
//     task() // 表示一个任务
// }, 2000)
// sleep(5000) // 表示一个很复杂的同步任务


// Ajax的原理
function ajax(url, callback) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else { // 兼容早期浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2、发送请求
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    // 3、服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj)
            callback(obj)
        }
    }
}

// var url = 'http://musicapi.xiecheng.live/personalized'
// ajax(url, res => {
//     console.log(res)
// })

// 1 -> 2 -> 3
// callback hell
ajax('static/a.json', res => {
    console.log(res)
    ajax('static/b.json', res => {
        console.log(res)
        ajax('static/c.json', res => {
            console.log(res)
        })
    })
})