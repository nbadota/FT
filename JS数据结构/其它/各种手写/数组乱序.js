let n = 10;
let arr = Array.from({length:n},() => --n);
console.log(arr);

function disorder(array) {
    const length = array.length;
    let current = length - 1;
    let random;
    while (current >-1) {
      random = Math.floor(length * Math.random());
      [array[current], array[random]] = [array[random], array[current]];
      current--;
    }
    return array;
  }