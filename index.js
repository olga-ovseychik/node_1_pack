const { version } = require("./package.json");

console.log(`Welcome to the App! You are currently using version: ${version}.`);

function evaluateReversePolishNotation(str) {
  const chars = str.split(" ");
  let stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
      if (b === 0) {
        throw new Error("Division by zero.");
      }

      return Math.trunc(a / b);
    }
  };

  for (let char of chars) {
    if (char in operators) {
      const [b, a] = [stack.pop(), stack.pop()];
      
      stack.push(operators[char](a, b));
    } else {
      const num = Number(char);

      if (Number.isNaN(num)) {
        throw new Error(`${char} is an invalid value.`);
      }
      
      stack.push(num);
    }
  }

  return stack[0];
}

module.exports = { evaluateReversePolishNotation };
