let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

function createBookList(title, author, copies) {
    bookTitles.push(title);
    authorNames.push(author);
    copiesAvailable.push(copies);
}

function addCopies(bookTitle, additionalCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        copiesAvailable[index] += additionalCopies;
    }
}

function sellBook(bookTitle, soldCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        copiesAvailable[index] -= soldCopies;
    }
}

function getDetails() {
    for (let i = 0; i < bookTitles.length; i++) {
        console.log(`${bookTitles[i]} by ${authorNames[i]}, copies available: ${copiesAvailable[i]}`);
    }
}

createBookList('Bohubrihi', 'Humayun Ahmed', 10);
addCopies('Bohubrihi', 5);
sellBook('Bohubrihi', 3);
getDetails();