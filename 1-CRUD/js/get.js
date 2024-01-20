const BASE_URL = 'http://localhost:4040';

/*
fetch('http://localhost:4040/books')
  .then((response) => response.json())
  .then((books) => console.log(books));

fetch('http://localhost:4040/books/1')
  .then((response) => response.json())
  .then((books) => console.log(books));
*/

function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
    .then((response) => response.json())
    .then((books) => console.log(books));
}

function fetchBooksAll() {
  return fetch(`${BASE_URL}/books`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(
      `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
    );
  });
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then((response) => response.json())
    .then((books) => console.log(books));
}

// fetchBooks();
// fetchBookById(2);

/*
fetchBooksAll()
  .then((books) => console.log(books))
  .catch((err) => console.log(err));
*/

async function fetchAllBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
}

async function getBook() {
  try {
    const books = await fetchAllBooks();
    console.log(books);
  } catch (err) {
    console.log(err);
  }
}
getBook();
