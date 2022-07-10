function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString(); // {1}
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn; // {1}
        this.table = {}; // {2}
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key); // {1}
            this.table[tableKey] = new ValuePair(key, value); // {2}
            return true;
        }
        return false;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)]; // {1}
        return valuePair == null ? undefined : valuePair.value; // {2}
    }

    keyValues() {
        return Object.values(this.table);
    }

    keyValuesLegacy() {
        const valuePairs = [];
        for (const k in this.table) { // {1}
            if (this.hasKey(k)) {
                valuePairs.push(this.table[k]); // {2}
            }
        }
        return valuePairs;
    };

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    keysLegacy() {
        const keys = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            keys.push(valuePairs[i].key);
        }
        return keys;
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    forEach(callbackFn) {
        const valuePairs = this.keyValues(); // {1}
        for (let i = 0; i < valuePairs.length; i++) { // {2}
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value); // {3}
            if (result === false) {
                break; // {4}
            }
        }
    }

    size() {
        return Object.keys(this.table).length;
        //return this.keyValues().length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`; // {1}
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`; // {2}
        }
        return objString; // {3}
    }
}

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.remove('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`);
});