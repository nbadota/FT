const data = [1, 2, 3, 0, 0, 0, 5, 2, 0, 1, 0, 0, 2];

function func(arr) {
    let i = 0;
    let res = [];
    while (i < arr.length) {
        if(arr[i] === 0) {
            let j = i;
            while (arr[j] === 0) {
                j++;
            }
            if(j - i <= 2) {
                for(let k=i;k < j;k++) {
                    res.push(arr[k]);
                }
            }
            i = j;
        }else {
            res.push(arr[i]);
            i++;
        }
    }

    return res;
}

console.log(func(data))