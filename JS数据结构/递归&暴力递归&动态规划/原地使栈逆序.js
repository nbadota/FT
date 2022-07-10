function f(stack) {
    const result = stack.pop();
    if(stack.length === 0) {
        return result;
    }else {
        const last = f(stack);
        stack.push(result);
        return last;
    }
}

function reverse(stack) {
    if(stack.isEmpty()) {
        return;
    }
    const i = f(stack);
    reverse(stack);
    stack.push(i);
}