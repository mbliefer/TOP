const newBookBtn = document.querySelector('.new-book');
const bookEntryForm = document.querySelector('#book-entry');
const closeX = document.querySelector('.close');
const submitBook = document.querySelector('.add-book');
const books = document.querySelector('#books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const notRead = document.querySelector('#not-read');
const read = document.querySelector('#read');
const readCheck = document.querySelector('#read-check');

let newBook;
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

Book.prototype.createBookCard = function () {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const label = document.createElement('label');
    const input = document.createElement('input');
    div.classList.add('book-card');
    h2.classList.add('title');
    h3.classList.add('author');
    h4.classList.add('pages');
    label.htmlFor = "read-check";
    label.textContent = "Read ";
    input.type = "checkbox";
    input.id = "read-check";
    input.name = "status";
    input.value = "Read";

    h2.textContent = this.title;
    h3.textContent = this.author;
    h4.textContent = this.pages;
    input.checked = newBook.read;

    books.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(label);
    div.appendChild(input);
}


function addBook() {
    let titleInput = title.value;
    let authorInput = author.value;
    let pageInput = pages.value;
    let readInput;

    if (read.checked) {
        readInput = true;
    }

    newBook = new Book(titleInput, authorInput, pageInput, readInput);
    myLibrary.push(newBook);
    myLibrary.map(displayBook);
    // newBook.createBookCard();
}

function displayBook(book) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const label = document.createElement('label');
    const input = document.createElement('input');
    div.classList.add('book-card');
    h2.classList.add('title');
    h3.classList.add('author');
    h4.classList.add('pages');
    label.htmlFor = "read-check";
    label.textContent = "Read ";
    input.type = "checkbox";
    input.id = "read-check";
    input.name = "status";
    input.value = "Read";

    h2.textContent = book.title;
    h3.textContent = book.author;
    h4.textContent = book.pages;
    input.checked = newBook.read;

    books.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(label);
    div.appendChild(input);
};

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    bookEntryForm.classList.remove('show');
    console.log(myLibrary);
});

newBookBtn.addEventListener('click', () => {
    bookEntryForm.classList.add('show');
});

closeX.addEventListener('click', () => {
    bookEntryForm.classList.remove('show');
});

