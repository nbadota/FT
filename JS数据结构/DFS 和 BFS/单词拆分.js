const wordBreak = (s, wordDict) => {
    const len = s.length;
    const wordSet = new Set(wordDict);
    const memo = new Array(len);
  
    const canBreak = (start) => {
      if (start === len) return true;
      if (memo[start] !== undefined) return memo[start]; // memo中有，就用memo中的
  
      for (let i = start + 1; i <= len; i++) {
        const prefix = s.slice(start, i);
        if (wordSet.has(prefix) && canBreak(i)) {
          memo[start] = true; // 当前递归的结果存一下
          return true;
        }
      }
      memo[start] = false; // 当前递归的结果存一下
      return false;
    };
    return canBreak(0);
  };

