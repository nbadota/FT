
var val = 10;
let a = function(){
    console.log('1...',this.val);
}
a.prototype.val = 9;
val = 3;
a(); //3
let b = new a();//9
console.log(b.val); //9