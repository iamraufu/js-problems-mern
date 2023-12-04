function isPalindrome(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
  }
  
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  console.log(isPalindrome("rotator")); // Output: true
  console.log(isPalindrome("peep")); // Output: true  