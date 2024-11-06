const BASE_URL = 'http://localhost:4040';

/*
fetch('http://localhost:4040/books')
  .then((response) => response.json())
  .then((books) => console.log(books));

fetch('http://localhost:4040/books/1')
  .then((response) => response.json())
  .then((books) => console.log(books));
*/

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then((response) => response.json())
    .then((books) => console.log(books));
}

fetchBookById(1);

/*
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

fetchBooksAll()
  .then((books) => console.log('Список книг:', books))
  .catch((err) => console.log('Ошибка:', err.message));
*/

//// Асинхронный вариант //////

async function fetchBooks() {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
      console.error('Ошибка ответа:', response); // Логируем весь ответ
      throw new Error(
        `ошибка по адресу ${response.url}, статус ответа ${response.status}, статус ошибки ${response.statusText}}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Не удалось загрузить книги: ${error.message}`);
    return null; // Возвращаем null для обработки в getBooks
  }
}

async function getBooks() {
  const books = await fetchBooks();
  if (books) {
    console.log('Список книг:', books);
  } else {
    console.log('Не удалось получить список книг.');
  }
}

getBooks();
