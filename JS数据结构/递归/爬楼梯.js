function f(n){
    //f(0) = 0,f(1) = 1，等价于 n<=1时，f(n) = n。
    if(n <= 1){
        return n;
    }
    return f(n-1) + f(n-2)
}
