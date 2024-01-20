const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: 'VUE',
  author: 'Я',
  genre: ['VUE'],
  rating: 100,
};

const newBook2 = {
  title: 'VUE',
  author: 'Я',
  genre: ['JQuery'],
  rating: 67,
};
function addBooks(createNewBook) {
  return fetch(`${BASE_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Accept: 'application/json', // то, что мы ожидаем из бек-енда
    },
    body: JSON.stringify(createNewBook), // привести объект или массив в строку
  }).then((response) => response.json());
}

// addBooks(newBook).then((book) => console.log(book));

/*
addBooks(newBook2)
  .then(renderBook)
  .catch((err) => console.log(err));
*/

function renderBook(book) {
  console.log('Отрисуй книгу');
  console.log(book);
}

// используя async/await

async function addBooksAll(createNewBook) {
  const response = await fetch(`${BASE_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createNewBook),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
}

async function addBookAndUpdateUI() {
  try {
    const book = await addBooksAll(newBook2);
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

addBookAndUpdateUI();

addBooksAll(newBook2)
  .then((book) => console.log(book))
  .catch((err) => console.log(err));
