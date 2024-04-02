const READ = true;
const NOT_READ = false;

const myLibrary = [];

function Book(title, author, pages, status = NOT_READ) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const title = prompt('Title');
  const author = prompt('Author');
  const pages = prompt('Pages');
  const status = prompt('Did you read it? (yes/no)') == 'yes' ? READ : NOT_READ;

  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function addDummyBooks() {
  const lotr1 = new Book('Lord of the Rings #1', 'J. R. R. Tolkien', 300, READ);
  const lotr2 = new Book('Lord of the Rings #2', 'J. R. R. Tolkien', 420, READ);
  const lotr3 = new Book('Lord of the Rings #3', 'J. R. R. Tolkien', 510, READ);

  myLibrary.push(lotr1);
  myLibrary.push(lotr2);
  myLibrary.push(lotr3);
}

addDummyBooks();
