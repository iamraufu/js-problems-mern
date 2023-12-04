function findPrimeNumbers(arr) {
      function isPrime(num) {
          if (num < 2) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                  return false;
              }
          }
          return true;
      }
  
      return arr.filter(isPrime);
  }
  
  const inputArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = findPrimeNumbers(inputArray);
  console.log(primeNumbers); // Output: [2, 3, 5, 7]
  