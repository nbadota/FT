function patch(re,s){
    //re=eval("/"+re+"/ig")
    re=Function("/"+re+"/ig")();
    return s.match(re).length;
}
let s = 'tools.jb51.net.too';
console.log(patch('too',s)); //弹出2
