var levelOrder = function (root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while (queue.length) { // 没有节点在列，就是遍历完毕
        let subRes = []
        const len = queue.length // 当前层的节点数目
        for (let i = 0; i < len; i++) { // 遍历当前层的节点
            let cur = queue.shift() // 出列
            subRes.push(cur.val) // 填充subRes数组
            if (cur.left) queue.push(cur.left) // 下层节点入列
            if (cur.right) queue.push(cur.right)
        }
        res.push(subRes)
    }
    return res
};

