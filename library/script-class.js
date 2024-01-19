class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBook() {
        const title = document.querySelector('#title');
        const author = document.querySelector('#author');
        const pages = document.querySelector('#pages');
        const read = document.querySelector('#read');

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
        this.myLibrary.push(newBook);
        this.createCardElements(newBook);
    };

    createCardElements(book) {
        const books = document.querySelector('#books');

        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let label = document.createElement('label');
        let input = document.createElement('input');
        let img = document.createElement('img');
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

        img.onclick = display.removeBook;
        input.onclick = display.changeReadStatus;

        h2.textContent = book.title;
        h3.textContent = `By: ${book.author}`;
        h4.textContent = `${book.pages} pages`;
        input.checked = book.read;

        books.appendChild(div);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(img);
    };

}

const display = (() => {
    const library = new Library;
    const myLibrary = library.myLibrary;
    console.log(myLibrary);

    const newBookBtn = document.querySelector('.new-book');
    const bookEntryForm = document.querySelector('#book-entry');
    const closeX = document.querySelector('.close');
    const submitBook = document.querySelector('.add-book');
    const trash = document.getElementsByClassName('trash');

    function clearForm() {
        const notRead = document.querySelector('#not-read');

        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false;
        notRead.checked = true;
    }

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
        const bookCards = document.getElementsByClassName('book-card');

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
        library.addBook();
        bookEntryForm.classList.remove('show');
        clearForm();
    });

    newBookBtn.addEventListener('click', () => {
        bookEntryForm.classList.add('show');
    });

    closeX.addEventListener('click', () => {
        bookEntryForm.classList.remove('show');
        clearForm();
    });

    return {
        removeBook,
        changeReadStatus
    }

})();

