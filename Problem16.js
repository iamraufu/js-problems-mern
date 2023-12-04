// Task 1
function fibonacciSequence(n) {
      const sequence = [0, 1];
      for (let i = 2; i < n; i++) {
          sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      return sequence;
  }
  
  console.log(fibonacciSequence(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  
  // Task 2
  function isFibonacciNumber(num) {
      const sqrt5 = Math.sqrt(5);
      const phi = (1 + sqrt5) / 2;
      const a = Math.round(phi * num);
      const b = Math.round(phi * a);
  
      return num === a || num === b;
  }
  
  console.log(isFibonacciNumber(8)); // Output: true
  console.log(isFibonacciNumber(10)); // Output: false
  