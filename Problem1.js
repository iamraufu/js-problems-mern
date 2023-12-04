function calculateStrikeRate(runs, balls) {
      const strikeRate = (runs / balls) * 100;
      return strikeRate.toFixed(2);
  }
  
  console.log(calculateStrikeRate(45, 30)); // Output: 150.00
  console.log(calculateStrikeRate(100, 60)); // Output: 166.67
  console.log(calculateStrikeRate(25, 40)); // Output: 62.50  