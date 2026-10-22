function extractNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  return arr.filter((item) => {
    return typeof item === "number" && !Number.isNaN(item);
  });
}
try {
  extractNumbers("bad");
} catch (err) {
  if (err instanceof TypeError) console.error("X worng type:", err.message);
}

//  console.log(extractNumbers([1,"a","a",4,5]))

function sumNumbersSafe(arr) {
  const arry = extractNumbers(arr);
  let sum = 0;
  arry.forEach((element) => {
    sum += element;
  });
  return sum;
}

let sum1;
try {
  sum1 = sumNumbersSafe([1, 4, "a", 5]);
  console.log(sum1);
} catch (err) {
  if (err instanceof TypeError) console.error("X worng type:", err.message);
}

function filterLargeSums(arrList, minTotal) {
  return arrList.filter((item) => sumNumbersSafe(item) >= minTotal);
}

let filterarr = filterLargeSums(
  [
    [1, 2],
    ["ss", 44],
    [10, 9],
  ],
  5,
);
console.log(filterarr);

function summaryStats(arrList) {
  const arr = filterLargeSums(arrList, 10);
  return arr.map((element) => {
    const nums = extractNumbers(element);
    const sum = sumNumbersSafe(element);
    return { sum: sum, avg: sum / nums.length };
  });
}
console.log(
  summaryStats([
    [1, 2],
    ["ss", 44],
    [10, 9],
  ]),
);

function safeCalculator(a, b, operation) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  )
    throw new TypeError("Input must be an array");
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new RangeError("Cannot divide by zero");
      return a / b;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}
console.log(safeCalculator(1, 6, "/"));
