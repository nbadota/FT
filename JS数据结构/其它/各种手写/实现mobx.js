class EventEmitter {
    list = {};
    on(event, fn) {
        let target = this.list[event];
        if (!target) {
            this.list[event] = [];
            target = this.list[event];
        }
        if (!target.includes(fn)) {
            target.push(fn);
        }
    };
    emit(event, ...args) {
        const fns = this.list[event];
        if (fns && fns.length > 0) {
            fns.forEach(fn => {
                fn && fn(...args);
            });
        }
    }
};

const em = new EventEmitter();
let currentFn;
let obId = 1;

const autorun = (fn) => {
    currentFn = fn;
    fn();
    currentFn = null;
};

const observable = (obj) => {
    // 用 Symbol 当 key；这样就不会被枚举到，仅用于值的存储；
    const data = Symbol('data');
    obj[data] = JSON.parse(JSON.stringify(obj));

    Object.keys(obj).forEach(key => {
          if (typeof obj[key] === 'object') {
                 observable(obj[key]);
          } else {
            // 每个 key 都生成唯一的 channel ID
            const id = String(obId++);
            Object.defineProperty(obj, key, {
                get: function () {
                    if (currentFn) {
                        em.on(id, currentFn);
                    }
                    return obj[data][key];
                },
                set: function (v) {
                    // 值不变时不触发
                    // console.log(v)
                    if (obj[data][key] !== v) {
                        obj[data][key] = v;
                        em.emit(id);
                    }
                }
            });
          }
    });
    return obj;
};


const store = observable({ a: 1, b: 2 });

autorun(() => {
    console.log('a:',store.a);
});

autorun(() => {
    console.log('a:',store.a);
});

store.a = 5;
//store.a = 6;

// store.b = 1;