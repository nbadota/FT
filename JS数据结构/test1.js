Promise.allSettled([
    Promise.reject({
        code: 500,
        msg: '服务异常'
    }),
    Promise.resolve({
        code: 200,
        data: ['1', '2', '3']
    }),
    Promise.resolve({
        code: 200,
        data: ['4', '5', '6']
    })
]).then(res => {
    console.log(res)
    console.log(typeof res[0])
    // console.log('成功')
    const data = res.filter(item => item.status === 'fulfilled')
    //console.log(data)
}).catch(err => {
    console.log(err)
    console.log('失败')
})