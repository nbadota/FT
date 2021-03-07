const set = new Set();
set.add(1);
set.add(2);
let aValues = set.values();
console.log(aValues.next());
console.log(set.values()); // 输出@Iterator
console.log(set.has(1)); // 输出 true
console.log(set.size); // 输出 1

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (setA, setB) => {
    const unionAb = new Set();
    setA.forEach(value => unionAb.add(value));
    setB.forEach(value => unionAb.add(value));
    return unionAb;
};
console.log(union(setA, setB)); // 输出[1, 2, 3, 4]

const intersection = (setA, setB) => {
    const intersectionSet = new Set();
    setA.forEach(value => {
        if (setB.has(value)) {
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};
console.log(intersection(setA, setB)); // 输出[2, 3]

const difference = (setA, setB) => {
    const differenceSet = new Set();
    setA.forEach(value => {
        if (!setB.has(value)) { // {1}
            differenceSet.add(value);
        }
    });
    return differenceSet;
};
console.log(difference(setA, setB));
