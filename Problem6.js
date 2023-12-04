function findShortestWord(str) {
      const words = str.split(' ');
      let shortest = words[0];
      for (let i = 1; i < words.length; i++) {
          if (words[i].length < shortest.length) {
              shortest = words[i];
          }
      }
      return shortest;
  }
  
  console.log(findShortestWord("The quick brown fox jumps over the lazy dog")); // Output: "The"
  console.log(findShortestWord("Hello world")); // Output: "world"
  console.log(findShortestWord("Today is Monday")); // Output: "is"  