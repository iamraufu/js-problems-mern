function getMaxProduct(arr) {
      arr.sort((a, b) => b - a);
      return arr[0] * arr[1];
  }
  
  console.log(getMaxProduct([2, 3, 5, 6, 7])); // Output: 42  