//防抖
/*
function debounce(fn, delay = 500) {
    // timer 是闭包中的
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

 */

function debounce(fn,delay = 500) {
    let timer

    return function () {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn(...arguments)
            timer = null
        },delay)
    }
}

/*
function test(fn) {
    return function () {
        console.log(arguments);
        fn(...arguments);
    }
}

const a = (a,b) => {
    console.log(a,b);
}

test(a)(1,2)
*/
/*
input1.addEventListener('keyup', debounce(function (e) {
    console.log(e.target)
    console.log(input1.value)
}, 600))

 */

//节流
/*
function throttle(fn, delay = 100) {
    let timer = null

    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

 */
function throttle(fn,delay = 100) {
    let timer
    return function() {
        if(timer) {
            return
        }
        timer = setTimeout(() => {
            fn(...arguments)
            timer = null
        },delay)
    }
}

/*
div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
}, 200))
 */