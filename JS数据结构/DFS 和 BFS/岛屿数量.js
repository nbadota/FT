/*
思路1 BFS
遇到 1 就计数 +1
维护一个队列，遇到 1 就让它的坐标入列
节点出列，并考察四个方向，如果是 1，将它转为 0，并将节点入列
如果越界了或遇到 0 ，则跳过不用入列
出列...入列...直到没有可以入列的节点，则当前岛屿的所有 1 都转 0 了
 */
const numIslands = (grid) => {
    let count = 0
    let queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                grid[i][j] = '0' // 做标记，避免重复遍历
                queue.push([i, j])
                turnZero(queue, grid)
            }
        }
    }
    return count
}

function turnZero(queue, grid) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    while (queue.length) {
        const cur = queue.shift()
        for (const dir of dirs) {
            const x = cur[0] + dir[0]
            const y = cur[1] + dir[1]
            if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
                continue
            }
            grid[x][y] = '0'
            queue.push([x, y])
        }
    }
}

/*
思路2 DFS
为什么要沉岛
遍历遇到 1 就是遇到土地，它肯定在一个岛上，统计计数 +1
如果不把它和同在一个岛的 1 变成 0，则DFS重复遍历到它们时，会对一个岛重复计数
怎么找出同处一岛的所有 1
DFS，从当前 1 为入口
DFS 做的事情：
将当前的 1 变 0
当前坐标的上下左右都递归 DFS，同处一个岛的 1 都变 0
dfs 出口：超出矩阵边界，或遇到 0，不用沉岛，直接返回
 */

const numIslands = (grid) => {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                turnZero(i, j, grid)
            }
        }
    }
    return count
}
function turnZero(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0
        || j >= grid[0].length || grid[i][j] === '0') return
    grid[i][j] = '0'
    turnZero(i, j + 1, grid)
    turnZero(i, j - 1, grid)
    turnZero(i + 1, j, grid)
    turnZero(i - 1, j, grid)
}
