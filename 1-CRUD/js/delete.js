const BASE_URL = 'http://localhost:4040';

function deleteBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`, {
    method: 'DELETE',
  }).then((response) => response.json());
}

deleteBookById('b100').then((books) => console.log(books));
