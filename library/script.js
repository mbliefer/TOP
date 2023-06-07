let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} ${author} ${pages} ${read}`
    }
}

function addBookToLibrary() {
    
}

const theHobbit = new Book('The Hobbit', 'by JRR Tolkien,', '295 pages,', 'not read yet');
