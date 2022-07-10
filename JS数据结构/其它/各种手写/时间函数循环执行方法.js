function job(delay,times,fn){
    let n = 1;
    return function(...args){
        fn(...args);
        let timer = setInterval(() => {
            fn(...args);
            n++;
            if(n === times) {
                clearTimeout(timer);
                timer = null;
            }
        },delay)
    }
}
let myTodo = job(1000, 5, (info) => console.log(info));
myTodo('alert');

// settimeout模拟setinterval
let timer = null
function interval(func, wait){
    let interv = function(){
        func.call(null);
        timer=setTimeout(interv, wait);
    };
    timer= setTimeout(interv, wait);
}

interval(function() {}, 20);

if (timer) {
    clearTimeout(timer);
    timer = null;
}

