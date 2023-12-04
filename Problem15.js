function printPalindromicTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        
        // Add leading spaces
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }

        // Add left side of the palindrome
        for (let j = i; j < 2 * i; j++) {
            row += j;
        }

        // Add right side of the palindrome
        for (let j = 2 * i - 2; j >= i; j--) {
            row += j;
        }

        console.log(row);
    }
}


printPalindromicTriangle(5);