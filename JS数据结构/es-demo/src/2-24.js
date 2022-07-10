// let p1 = Promise.resolve('success')
// // console.log(p1)
// p1.then(res => {
//     console.log(res)
// })

// let p2 = Promise.reject('fail')
// console.log(p2)
// p2.catch(err => {
//     console.log(err)
// })

// function foo(flag) {
//     if (flag) {
//         return new Promise(resolve => {
//             // 异步操作
//             resolve('success')
//         })
//     } else {
//         // return 'fail'
//         return Promise.reject('fail')
//     }
// }

// foo(false).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1)
//         resolve('1成功')
//     }, 2000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(2)
//         // resolve('2成功')
//         reject('2失败')
//     }, 1000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(3)
//         resolve('3成功')
//     }, 3000)
// })

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })
// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

const imgArr = ['1.jpg', '2.jpg', '3.jpg']
let promiseArr = []
imgArr.forEach(item => {
    promiseArr.push(new Promise((resolve, reject) => {
        // 图片上传的操作
        resolve()
    }))
})
Promise.all(promiseArr).then(res => {
    // 插入数据库的操作
    console.log('图片全部上传完成')
})

function getImg() {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = function () {
            resolve(img)
        }
        // img.src = 'http://www.xxx.com/xx.jpg'
        img.src = 'https://www.imooc.com/static/img/index/logo.png'
    })
}

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('图片请求超时')
        }, 2000)
    })
}

Promise.race([getImg(), timeout()]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})