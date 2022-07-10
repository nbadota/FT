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

class HashTableLinearProbing {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) { // {1}
                this.table[position] = new ValuePair(key, value); // {2}
            } else {
                let index = position + 1; // {3}
                while (this.table[index] != null) { // {4}
                    index++; // {5}
                }
                this.table[index] = new ValuePair(key, value); // {6}
            }
            return true;
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) { // {1}
            if (this.table[position].key === key) { // {2}
                return this.table[position].value; // {3}
            }
            let index = position + 1; // {4}
            while (this.table[index] != null && this.table[index].key !== key) { // {5}
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) { // {6}
                return this.table[position].value; // {7}
            }
        }
        return undefined; // {8}
    }

    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key); // {1}
        let index = removedPosition + 1; // {2}
        while (this.table[index] != null) { // {3}
            const posHash = this.hashCode(this.table[index].key); // {4}
            if (posHash <= hash || posHash <= removedPosition) { // {5}
                this.table[removedPosition] = this.table[index]; // {6}
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }

    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position]; // {1}
                this.verifyRemoveSideEffect(key, position); // {2}
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key ) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index]; // {3}
                this.verifyRemoveSideEffect(key, index); // {4}
                return true;
            }
        }
        return false;
    }

    djb2HashCode(key) {
        const tableKey = this.toStrFn(key); // {1}
        let hash = 5381; // {2}
        for (let i = 0; i < tableKey.length; i++) { // {3}
            hash = (hash * 33) + tableKey.charCodeAt(i); // {4}
        }
        return hash % 1013; // {5}
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') { // {1}
            return key;
        }
        const tableKey = this.toStrFn(key); // {2}
        let hash = 0; // {3}
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i); // {4}
        }
        return hash % 37; // {5}
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }
}

