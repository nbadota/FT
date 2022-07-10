// // 状态管理 
// // resolve 成功
// // reject 失败
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('imooc')
//         // resolve()
//         // reject()
//         // if(){
//         //     resolve()
//         // }else{
//         //     reject()
//         // }
//         // resolve('成功')
//         reject('失败')
//     }, 1000)
// }).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

// let p = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve()
// })
// console.log(2)
// p.then(res => {
//     console.log(3)
// })

// let p1 = new Promise((resolve, reject) => {
//     resolve(1)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 1000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(3)
//     }, 1000)
// })
// console.log(p1) // resolved
// console.log(p2) // pending
// console.log(p3) // pending
// setTimeout(() => {
//     console.log(p2)
// }, 2000)
// setTimeout(() => {
//     console.log(p3)
// }, 2000)

// p1.then(res => {
//     console.log(res)
// })
// p2.then(res => {
//     console.log(res)
// })
// p3.catch(err => {
//     console.log(err)
// })

// let p = new Promise((resolve, reject) => {
//     reject(2)
//     resolve(1)
// })
// p.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

function ajax(url, successCallback, failCallback) {
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
            successCallback && successCallback(obj)
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
            failCallback && failCallback(xmlhttp.statusText)
        }
    }
}

// new Promise((resolve, reject) => {
//     ajax('static/a.json', res => {
//         console.log(res)
//         resolve()
//     })
// }).then(res => {
//     console.log('a成功')
//     return new Promise((resolve, reject) => {
//         ajax('static/b.json', res => {
//             console.log(res)
//             resolve()
//         })
//     })
// }).then(res => {
//     console.log('b成功')
//     return new Promise((resolve, reject) => {
//         ajax('static/c.json', res => {
//             console.log(res)
//             resolve()
//         })
//     })
// }).then(res => {
//     console.log('c成功')
// })

function getPromise(url) {
    return new Promise((resolve, reject) => {
        ajax(url, res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}
// getPromise('static/aa.json')
//     .then(res => {
//         console.log(res)
//         return getPromise('static/b.json')
//     }).then(res => {
//         console.log(res)
//         return getPromise('static/c.json')
//     }).then(res => {
//         console.log(res)
//     })
// getPromise('static/aa.json')
//     .then(res => {
//         console.log(res)
//         return getPromise('static/b.json')
//     }, err => {
//         console.log(err)
//         return getPromise('static/b.json')
//     }).then(res => {
//         console.log(res)
//         return getPromise('static/c.json')
//     }).then(res => {
//         console.log(res)
//     })

getPromise('static/a.json')
    .then(res => {
        console.log(res)
        return getPromise('static/b.json')
    }).then(res => {
        console.log(res)
        return getPromise('static/c.json')
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })