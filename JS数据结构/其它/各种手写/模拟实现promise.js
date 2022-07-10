class MyPromise {
  state = 'pending';
  value = undefined;
  reason = undefined;
  resolveCallbacks = [];
  rejectedCallbacks = [];
  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.resolveCallbacks.forEach(fn => fn(this.value));
      }
    }

    const rejectedHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.value = reason
        this.rejectedCallbacks.forEach(fn => fn(this.reason));
      }
    }

    try{
      fn(resolveHandler,rejectedHandler);
    }catch (e) {
      rejectedHandler(e);
    }
  }

  then (fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v;
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e;

    if(this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
       this.resolveCallbacks.push(() => {
         try {
           const v = fn1(this.value);
           resolve(v);
         } catch (e) {
           reject(e);
         }
       })
        this.rejectedCallbacks.push(() => {
          try {
            const r = fn2(this.reason);
            reject(r);
          }catch (e) {
            reject(e);
          }
        })
      })
    }

    if(this.state === 'fulfilled') {
      return new MyPromise((resolve, reject) => {
        try {
          const v = fn1(this.value);
          resolve(v);
        }catch (e) {
          reject(e);
        }
      })
    }

    if(this.state === 'rejected') {
      return new MyPromise((resolve, reject) => {
        try {
          const r = fn2(this.reason);
          reject(r);
        }catch (e) {
          reject(e);
        }
      })
    }
  }

  catch (fn) {
    return this.then(null, fn);
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve,reject) => resolve(value));
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve,reject) => reject(reason));
}