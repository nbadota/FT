


console.log(process(3,'左','右','中'));
function process(n,from,to,help) {
    if(n === 1) {
        console.log('move 1 from ' + from + ' to ' + to);
    }else {
        process(n-1,from,help,to);
        console.log('move ' + n + ' from ' + from + ' to ' + to);
        process(n-1,help,to,from);
    }
}