const ans = [];
process('abc',0,ans,'');
console.log(ans);
function process(str,index,ans,path) {
    if(index === str.length) {
        ans.push(path);
        return;
    }
    const no = path;
    process(str,index + 1,ans,no);
    const yes = path + str[index];
    process(str,index + 1,ans,yes);
}