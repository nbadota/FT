var moduleA = (function(mod){
    var count = 10; //私有变量

    function showA(){ //私有函数
        count += 20;
        alert(count);
    }
    function showB(){
        count *= 10;
        alert(count);
    }
    mod.outA = showA;
    mod.outB = showB;

    //对外暴露
    return mod;
})(moduleA || {});