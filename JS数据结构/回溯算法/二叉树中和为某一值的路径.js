function FindPath(root, expectNumber) {
    const result = [];
    if (root) {
      FindPathCore(root, expectNumber, [], 0, result);
    }
    return result;
  }

  function FindPathCore(node, expectNumber, stack, sum, result) {
    stack.push(node.val);
    sum += node.val;
    if (!node.left && !node.right && sum === expectNumber) {
      result.push(stack.slice(0));
    }
    if (node.left) {
      FindPathCore(node.left, expectNumber, stack, sum, result);
    }
    if (node.right) {
      FindPathCore(node.right, expectNumber, stack, sum, result);
    }
    stack.pop();
  }