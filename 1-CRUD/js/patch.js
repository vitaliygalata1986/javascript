const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  }).then((response) => response.json());
}

updateBookById({ title: 'React JS 2024' }, 5).then((books) =>
  console.log(books)
);

updateBookById({ title: 'Angular' }, 2).then((books) => console.log(books));

updateBookById({ rating: 1000 }, 4).then((books) => console.log(books));

updateBookById({ rating: 10, author: 'Орелли' }, 1).then((books) =>
  console.log(books)
);
