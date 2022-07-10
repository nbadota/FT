var moduleA = (function(mod){
    function showC(){
        alert("hello world");
    }

    mod.outC = showC;
    return mod;
})(moduleA || {});