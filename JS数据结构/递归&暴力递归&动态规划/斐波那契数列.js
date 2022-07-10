function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) { // n >= 2
        fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

function fibonacci(n){
    if (n === 1) return 1; // {1}
    if (n === 2) return 1; // {2}
    return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}
console.log(fibonacci(5));

function fibonacciMemoization(n) {
    const memo = [0, 1]; // {1}
    const fibonacci = (n,memo) => {
        if (memo[n] != null) return memo[n]; // {2}
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // {3}
    };
    return fibonacci;
}