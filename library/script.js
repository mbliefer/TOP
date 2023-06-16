const newBookBtn = document.querySelector('.new-book');
const bookEntryForm = document.querySelector('#book-entry');
const closeX = document.querySelector('.close');
const submitBook = document.querySelector('.add-book');
const books = document.querySelector('#books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const readCheck = document.querySelectorAll('#read-check');
const bookCards = document.getElementsByClassName('book-card');
const trash = document.getElementsByClassName('trash');

let div;
let h2;
let h3;
let h4;
let label;
let input;
let img;

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

Book.prototype.createBookCard = function () {
    createCardElements();

    h2.textContent = this.title;
    h3.textContent = this.author;
    h4.textContent = this.pages;
    input.checked = this.read;
};

function addBook() {
    let titleInput = title.value;
    let authorInput = author.value;
    let pageInput = pages.value;
    let readInput;

    if (read.checked) {
        readInput = true;
    }
    else {
        readInput = false;
    };

    let newBook = new Book(titleInput, authorInput, pageInput, readInput);
    myLibrary.push(newBook);
    newBook.createBookCard();
};

function createCardElements() {
    div = document.createElement('div');
    h2 = document.createElement('h2');
    h3 = document.createElement('h3');
    h4 = document.createElement('h4');
    label = document.createElement('label');
    input = document.createElement('input');
    img = document.createElement('img');
    img.src = 'images/red-delete-10437.svg';

    img.classList.add('trash');
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

    img.onclick = removeBook;
    input.onclick = changeReadStatus;

    books.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(img);
};

function removeBook(e) {
    let trashCans = Array.from(trash);
    e.target.parentNode.remove();
    myLibrary.forEach((book) => {
        let bookToRemove = myLibrary.indexOf(book);
        if (bookToRemove === trashCans.indexOf(this)) {
            myLibrary.splice(bookToRemove, 1);
        };
    });
};

function changeReadStatus(e) {
    let bookCardsArr = Array.from(bookCards);
    myLibrary.forEach((book) => {
        let bookTarget = myLibrary.indexOf(book);
        if (bookTarget === bookCardsArr.indexOf(this.parentNode)) {
            myLibrary[bookTarget].read = !myLibrary[bookTarget].read;
        }
    })
};

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    bookEntryForm.classList.remove('show');
    console.log(myLibrary);
    console.log(bookCards);
});

newBookBtn.addEventListener('click', () => {
    bookEntryForm.classList.add('show');
});

closeX.addEventListener('click', () => {
    bookEntryForm.classList.remove('show');
});


