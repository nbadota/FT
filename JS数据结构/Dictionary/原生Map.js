/*
基础操作时间复杂度为常数级别
 */
const map = new Map();
map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');
//console.log(map.has('Gandalf')); // true
//console.log(map.size); // 3
//console.log(map.keys()); // 输出{"Gandalf", "John", "Tyrion"}
//console.log(map.values()); // 输出{"gandalf@email.com", "johnsnow@email.com","tyrion@email.com"}
//console.log(map.get('Tyrion')); // tyrion@email.com

const map1 = new WeakMap();
const ob1 = { name: 'Gandalf' }; // {1}
const ob2 = { name: 'John' };
let ob3 = { name: 'Tyrion' };
map1.set(ob1, 'gandalf@email.com'); // {2}
map1.set(ob2, 'johnsnow@email.com');
map1.set(ob3, 'tyrion@email.com');
//console.log(map1.has(ob1)); // true {3}
ob3 = null;
console.log(map1.get(ob3)); // tyrion@email.com {4}
//map1.delete(ob2); // {5}