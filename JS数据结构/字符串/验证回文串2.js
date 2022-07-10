/**
 * @param {string} s
 * @return {boolean}
 */

 var isPali = function(s,l,r) {
    while(l < r) {
        if(s[l] !== s[r]) {
            return false
        }
        l++;
        r--;
    }
    return true;
}

var validPalindrome = function(s) {
    let l=0,r=s.length -1;
    while(l < r) {
        if(s[l] !== s[r]) {
            return isPali(s,l+1,r) || isPali(s,l,r-1);
        }
        l++;
        r--;
    }
    return true;
};