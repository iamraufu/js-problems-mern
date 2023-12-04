function getPositiveNumbers(arr) {
      return arr.filter(num => num > 0);
  }
  
  const inputArray = [2, -5, 10, -3, 8, -1, 0, 7];
  console.log(getPositiveNumbers(inputArray)); // Output: [2, 10, 8, 7]
  