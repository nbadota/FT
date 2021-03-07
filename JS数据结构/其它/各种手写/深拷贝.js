function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        // obj 是 null ，或者不是对象和数组，直接返回
        return obj
    }

    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用！！！
            result[key] = deepClone(obj[key])
        }
    }

    // 返回结果
    return result
}

/*
function deepClone(obj = {}) {
    if(typeof obj !== 'object' || obj == null) {
        return obj
    }
    let res
    if (obj instanceof Array) {
        res = []
    }else {
        res = {}
    }

    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }
    }

    return res
}

 */

