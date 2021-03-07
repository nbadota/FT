/*
应用场景：
1.网络请求，如ajax图片加载
2.定时任务，如setTimeout
 */
//手写加载一张图片
/*
function loadImg(src) {
    const p = new Promise(
        (resolve,reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error('error')
                reject(err)
            }
            img.src = src
        }
    )
    return p
}

const url1 = "url"
const url2 = "url"
loadImg(url1).then(img1 => {
    return img1//普通对象
}).then(img1 => {
    return loadImg(url2) //返回promise实例
}).then(img2 => {
    return img2
}).then(img2 => {

}).catch(ex=>{

})
*/
//event loop
/*
1.同步代码，在call stack 执行
2.遇到异步，先记录，等待时机
3.时机到了，移动到callback queue
4.若call stack为空，event loop开始工作，轮询查找callback queue，如有移动到call stack执行
异步，dom事件都使用回调，都基于event loop
 */

//async,await
/*
1.async,await是同步语法，彻底消灭回调函数
 */


/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100)
        console.log(300)
    }, 1000)
})

p.then(res => {
    console.log(res);
})


 */
