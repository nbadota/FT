// Promise.all([
//     Promise.resolve({
//         code: 200,
//         data: [1, 2, 3]
//     }),
//     Promise.reject({
//         code: 500,
//         data: []
//     }),
//     Promise.resolve({
//         code: 200,
//         data: [7, 8, 9]
//     }),
// ]).then(res=>{
//     console.log(res)
//     console.log('成功')
// }).catch(err=>{
//     console.log(err)
//     console.log('失败')
// })

// es2020
Promise.allSettled([
    Promise.resolve({
        code: 200,
        data: [1, 2, 3]
    }),
    Promise.reject({
        code: 500,
        data: []
    }),
    Promise.resolve({
        code: 200,
        data: [7, 8, 9]
    }),
]).then(res=>{
    // console.log(res)
    // console.log('成功')
    const data = res.filter(item => item.status === 'fulfilled')
    console.log(data)
}).catch(err=>{
    console.log(err)
    console.log('失败')
})