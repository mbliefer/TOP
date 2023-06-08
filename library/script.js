const newBookBtn = document.querySelector('.new-book');
const bookEntryForm = document.querySelector('#book-entry');
const closeX = document.querySelector('.close');
const submitBook = document.querySelector('.add-book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const notRead = document.querySelector('#not-read');
const read = document.querySelector('#read');
const readCheck = document.querySelector('#read-check');


let newBook;
// let titleInput;
// let authorInput;
// let pageInput;
// let readInput;
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return `${title} ${author} ${pages} ${read}`
    // }
}

function addBook() {
    let titleInput = title.value;
    let authorInput = author.value;
    let pageInput = pages.value;
    let readInput = false;

    newBook = new Book(titleInput, authorInput, pageInput, readInput);
    myLibrary.push(newBook);
}

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    console.log(myLibrary);
});

newBookBtn.addEventListener('click', () => {
    bookEntryForm.classList.add('show');
});

closeX.addEventListener('click', () => {
    bookEntryForm.classList.remove('show');
});

