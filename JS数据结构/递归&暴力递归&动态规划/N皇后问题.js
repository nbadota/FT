
console.log(process(0,[],4));

function process(i,record,n) {
    if(i === n) {
        return 1;
    }
    let res = 0;
    for (let j=0;j<n;j++) {
        if(isValid(record,i,j)){
            record[i] = j;
            res += process(i+1,record,n);
        }
    }

    return res;
}

function isValid(record,i,j) {
    for (let k = 0;k < i;k++) {
        if(j === record[k] || Math.abs(record[k] - j) === Math.abs(i - k)) {
            return false;
        }
    }
    return true;
}