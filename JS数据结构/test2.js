function Foo() {
    getName = function () { alert (1); };
    return this;
}
var getName;
console.log(getName);
function getName() {
    //alert (5);
}
console.log(getName);
/*
Foo.getName = function () {
    alert (2);
};
Foo.prototype.getName = function () {
    alert (3);
};
getName = function () {
    alert (4);
};
getName();

 */