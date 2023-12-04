function findMedian(arr) {
      const sortedArr = arr.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedArr.length / 2);
      if (sortedArr.length % 2 === 0) {
          return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
      } else {
          return sortedArr[mid];
      }
  }
  
  console.log(findMedian([5, 2, 8, 1, 9])); // Output: 5
  console.log(findMedian([4, 2, 7, 1, 9, 10])); // Output: 5.5  