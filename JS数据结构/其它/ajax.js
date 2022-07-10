//封装ajax
function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404 || xhr.status === 500) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
/*
function ajax(url) {
    const p = new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404 || xhr.status === 500) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}

 */
/*post请求
const postData = {
userName: 'xxx',
password: 'xxx'
}
xhr.send(JSON.stringify(postData))
 */
/* xhr.readyState
0-未调用send
1-正在调用send
2-send执行完成
3-解析响应内容
4-响应内容完成，可以在客户端调用
 */

/*
同源:协议，域名，端口，三者一致
 */

/*
传统API  把每个url当作一个功能
Restful API  把每个url当作一个唯一的资源
 */


//http缓存
/*
1.什么是缓存，第二次访问页面的时候，一些资源不需要从服务端重新获取
2.为什么需要缓存，优化网络请求
3.能被缓存，js css img
responseHeader（服务端）中返回
强制缓存  Cache-Control:  max-age=20000000(s)/no-cache/no-store
协商缓存(服务端判断资源能否用缓存的内容)  Last-Modified 资源最后修改时间
         Etag 资源的唯一标识
         requestHeader中加入if-Modified-Since 资源最后修改时间
                           if-None_Match
 */

/*
//封装axios
const $http = axios.create({
    baseURL,
})

export const get = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
        // axiso 自带 get 和 post 方法
        $http.get(url,{
            params,
        }).then(res=>{
            if(res.data.status===0){
                resolve(res.data);
            }else{
                alert(res.data.msg)
            }
        }).catch(error=>{
            alert('网络异常');
        })
    })
}
 */
