class Book {
    constructor(name, author, pages, read) {
        this.name = name
        this.author = author
        this.pages = pages
        this.read = read

        this.info = function () {
            console.log(`Hello, ${author}'s ${name} has ${pages}. I have ${read} the book.`)
        }
    }
}
const theHobbit = new Book('The Hobbit','J.R.R Tolkien','295 pages','not read')
theHobbit.info();

let myLibrary = [];
let newBook;

function addBookToLibrary() {
    newBook = new Book(title, author, pages,read); 
    myLibrary.push(newBook); 
}