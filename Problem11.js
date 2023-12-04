function findMissingNumber(arr) {
      const n = arr.length + 1;
      const sum = (n * (n + 1)) / 2;
      const actualSum = arr.reduce((acc, num) => acc + num, 0);
      return sum - actualSum;
  }
  
  console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8])); // Output: 4  