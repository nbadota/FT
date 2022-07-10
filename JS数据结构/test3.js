let p1 = async function () { return Promise.resolve(1) }
let p2 = async function () { return Promise.resolve(2) }
let p3 = async function () { return Promise.resolve(3) }
let p4 = async function () { return Promise.resolve(4) }
let p5 = async function () { return Promise.reject(new Error('false')) }
let arr = [p1,p2,p3,p4,p5];

let all = Promise.all(arr.map((promise)=>promise().catch((e)=>e)))
all.then(res=>{console.log(res[4] instanceof Error)}).catch(err=>console.log(err));
