class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map();
    }

    get(key) {
        let val = this.map.get(key);
        if (val === undefined) return -1;

        this.map.delete(key); // 因为被用过一次，原有位置删除
        this.map.set(key, val); // 放入最下面表示最新使用
        return val;
    }

    put(key, val) {
        if (this.map.has(key)) this.map.delete(key); // 如果有，删除

        this.map.set(key, val); // 放到最下面表示最新使用

        if (this.map.size > this.capacity) {
            // 这里有个知识点
            // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
            // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
            this.map.delete(this.map.entries().next().value[0])
        }
    }
}


/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map =  new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map.get(key)
    if(val == null) return -1
    this.map.delete(key)
    this.map.set(key,val)

    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key)
    }
    this.map.set(key,value)
    if(this.map.size > this.capacity){
        this.map.delete(this.map.entries().next().value[0])
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
