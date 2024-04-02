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
  const title = document.querySelector('#new-book-form__title').value;
  const author = document.querySelector('#new-book-form__author').value;
  const pages = document.querySelector('#new-book-form__pages').value;
  const status = document.querySelector('#new-book-form__read').checked ? READ : NOT_READ;
  
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function addDummyBooks() {
  const lotr1 = new Book('Lord of the Rings #1', 'J. R. R. Tolkien', 300, NOT_READ);
  const lotr2 = new Book('Lord of the Rings #2', 'J. R. R. Tolkien', 420, READ);
  const lotr3 = new Book('Lord of the Rings #3', 'J. R. R. Tolkien', 510, READ);

  myLibrary.push(lotr1);
  myLibrary.push(lotr2);
  myLibrary.push(lotr3);
}

function hideBooks() {
  const books = document.querySelector('#books');

  books.textContent = '';
}

function showBooks() {
  const books = document.querySelector('#books');

  myLibrary.forEach((book, index) => {
    const bookDOM = document.createElement('li');
    bookDOM.textContent = `${book.status ? "✅ " : ""}${book.title} by ${book.author} (${book.pages} pages)`;
    bookDOM.setAttribute('data-index', index);

    // Add delete button
    const deleteButtonDOM = document.createElement('button');
    deleteButtonDOM.textContent = 'X';
    deleteButtonDOM.classList.add('books__delete-button');
    deleteButtonDOM.setAttribute('data-index', index);

    // TODO: Move the listener to parent and work out the clicked element
    deleteButtonDOM.addEventListener('click', () => {
      deleteBook(index);
      refreshBooks();
    });
    bookDOM.appendChild(deleteButtonDOM);

    // Add "mark as (un)read" button
    const toggleStatusButtonDOM = document.createElement('button');
    if (book.status === NOT_READ) {
        toggleStatusButtonDOM.textContent = 'Mark as read';
    } else {
        toggleStatusButtonDOM.textContent = 'Mark as unread';
    }

    // TODO: Likewise, move the listener to parent (multiple -> single)
    toggleStatusButtonDOM.addEventListener('click', () => {
      toggleBookStatus(index);
      refreshBooks();
    });
    bookDOM.appendChild(toggleStatusButtonDOM);

    books.appendChild(bookDOM);
  });
}

function refreshBooks() {
    hideBooks();
    showBooks();
}

function toggleBookStatus(index) {
  myLibrary[index].status = !myLibrary[index].status;
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
}

function showForm() {
    const form = document.querySelector('#new-book-form');

    form.style.display = 'block';
}

function hideForm() {
    const form = document.querySelector('#new-book-form');

    form.style.display = 'none';
}

function bindEvents() {
    const showFormButton = document.querySelector('#add-book-button');
    const formButton = document.querySelector('#new-book-form__submit');

    showFormButton.addEventListener('click', showForm);

    formButton.addEventListener('click', (e) => {
        e.preventDefault();
        addBookToLibrary();
        refreshBooks();
        hideForm();
    });
}

addDummyBooks();
showBooks();
bindEvents();