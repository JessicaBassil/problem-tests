const isValidBracketSequence = (brackets) => {
  let stack = [];
  let bracketsMap = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  const open = ["[", "{", "("];
  for (let i in brackets) {
    const current = brackets[i];
    if (open.find((openB) => openB === current)) {
      // open
      stack.push(current + "");
    } else {
      // closed
      const idx = stack.findIndex(
        (bracket) => bracket + "" === bracketsMap[current + ""] + ""
      );
      if (idx == stack.length - 1) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};

export default isValidBracketSequence;
