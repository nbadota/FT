class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element; // {1}
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]; // {1}
            return true;
        }
        return false;
    }

    clear() {
        this.items = {}; // {2}
    }

    size() {
        return Object.keys(this.items).length; // {1}
    }

    sizeLegacy() {
        let count = 0;
        for (let key in this.items) { // {2}
            if (this.items.hasOwnProperty(key)) { // {3}
                count++; // {4}
            }
            return count;
        }
    }

    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for(let key in this.items) { // {1}
            if(this.items.hasOwnProperty(key)) {
                values.push(this.items[key]); //values.push(key) {2}
            }
        }
        return values;
    }

    union(otherSet) {
        const unionSet = new Set(); // {1}
        this.values().forEach(value => unionSet.add(value)); // {2}
        otherSet.values().forEach(value => unionSet.add(value)); // {3}
        return unionSet;
    }

    unionLegacy(otherSet) {
        const unionSet = new Set(); // {1}
        let values = this.values(); // {2}
        for (let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values(); // {3}
        for (let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set(); // {1}
        const values = this.values(); // {2}
        const otherValues = otherSet.values(); // {3}
        let biggerSet = values; // {4}
        let smallerSet = otherValues; // {5}
        if (otherValues.length - values.length > 0) { // {6}
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => { // {7}
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new Set(); // {1}
        this.values().forEach(value => { // {2}
            if (!otherSet.has(value)) { // {3}
                differenceSet.add(value); // {4}
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) { // {1}
            return false;
        }
        let isSubset = this.values().every(value => { // {3}
            if (!otherSet.has(value)) { // {4}
                return false;
            }
            return true; // {6}
        }); // {2}

        return isSubset; // {7}
    }
}

/*
const set = new Set();
set.add(1);
console.log(set.values()); // 输出[1]
console.log(set.has(1)); // 输出 true
console.log(set.size()); // 输出 1
set.add(2);
console.log(set.valuesLegacy()); // 输出[1, 2]
console.log(set.has(2)); // 输出 true
console.log(set.size()); // 输出 2
set.delete(1);
console.log(set.values()); // 输出[2]
set.delete(2);
console.log(set.values()); // 输出[]
 */

/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB.values())
 */

/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
 */

/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const differenceAB = setA.difference(setB);
console.log(differenceAB.values());

 */

const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));