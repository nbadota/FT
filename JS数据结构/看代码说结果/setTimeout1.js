

setTimeout(() => {   console.log(1);  }, 1);
setTimeout(() => {   console.log(2);  }, 0);
// -----
setTimeout(() => {   console.log(1);  }, 11);
setTimeout(() => {   console.log(2);  }, 10);

// 1 2 2 1
// https://www.itdaan.com/tw/55a5183b601d3d2f26be370223733270