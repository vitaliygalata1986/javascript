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

addBooks(newBook2)
  .then(renderBook)
  .catch((err) => console.log(err));

function renderBook(book) {
  console.log('Добавленная книга', book);
}

// используя async/await

async function addBooksAll(createNewBook) {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createNewBook),
    });

    if (!response.ok) {
      console.error('Ошибка ответа:', response); // Логируем весь ответ
      throw new Error(
        `ошибка по адресу ${response.url}, статус ответа ${response.status}, статус ошибки ${response.statusText}}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Ошибка добавления книги: ${error.message}`);
    throw error; // Пробрасываем ошибку, чтобы обработать ее в addBookAndUpdateUI
  }
}

async function addBookAndUpdateUI() {
  try {
    const book = await addBooksAll(newBook2);
    console.log('Добавленная книга:', book);
  } catch (error) {
    console.error('Ошибка при обновлении UI:', error.message);
  }
}

addBookAndUpdateUI();
