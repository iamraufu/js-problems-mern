function reverseString(str) {
      let reversed = '';
      for (let i = str.length - 1; i >= 0; i--) {
          reversed += str[i];
      }
      return reversed;
  }
  
  console.log(reverseString('hello')); // Output: 'olleh'
  console.log(reverseString('racecar')); // Output: 'racecar'
  console.log(reverseString('12345')); // Output: '54321'  