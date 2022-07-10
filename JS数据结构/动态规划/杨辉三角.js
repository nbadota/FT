// 求前n行
var generate = function(numRows) {
    const ret = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
        ret.push(row);
    }
    return ret;
};

// 求第n行
var getRow = function(rowIndex) {
    const res = new Array(rowIndex + 1);
    res[0] = 1;

    for (let i = 1; i < rowIndex + 1; i++) {
        res[0] = res[i] = 1;
        for (let j = i - 1; j >= 1; j--) {
            res[j] = res[j] + res[j - 1];
        }
    }
    return res;
};
