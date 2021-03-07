//Promise.all   Promise.race  Promise.allSettled

let promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        // 用来存储每个promise的返回值
        let values = new Array(promises.length);
        // 当前已经完成了几个promise
        let finishCount = 0;

        for (let i = 0; i < promises.length; ++i) {
            let promise = promises[i];
            promise.then(val => {
                values[i] = val;
                ++finishCount;
                if (finishCount === promises.length) {
                    resolve(values);
                }
            }).catch(err => {
                reject(err)
            })
        }
    });
};

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
//let p4 = Promise.reject(4)

let res = promiseAll([p1,p2,p3])
console.log(res)

let promiseAll1 = (promises) => {
    return new Promise((resolve,reject) =>{
        let res = new Array(promises.length)
        let count = 0

        for(let i=0;i < promises.length;i++){
            let promise = promises[i]
            promise.then(val => {
                res[i] = val
                ++count
                if (count === promises.length) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}
