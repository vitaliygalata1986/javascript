const BASE_URL = 'http://localhost:4040';

/*
function updateBookById(update, bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  }).then((response) => {
    if (!response.ok) {
      // Если ответ не успешен, выбрасываем ошибку
      throw new Error(
        `Ошибка по адресу ${response.url}, статус ответа ${response.status}, статус ошибки ${response.statusText}`
      );
    }
    return response.json(); // Возвращаем распарсенный JSON
  });
}

updateBookById({ title: 'React JS 2024' }, 1)
  .then((books) => console.log('Книга обновлена:', books))
  .catch((error) => {
    console.error('Ошибка при обновлении книги:', error);
  });

updateBookById({ title: 'Angular' }, '68f3')
  .then((books) => console.log('Книга обновлена:', books))
  .catch((error) => {
    console.error('Ошибка при обновлении книги:', error);
  });

  */

async function updateBookById(update, bookId) {
  try {
    const response = await fetch(`${BASE_URL}/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    });

    if (!response.ok) {
      console.error('Ошибка ответа:', response); // Логируем весь ответ
      // Если ответ не успешен, выбрасываем ошибку
      throw new Error(
        `Ошибка по адресу ${response.url}, статус ответа ${response.status}, статус ошибки ${response.statusText}`
      );
    }

    return await response.json(); // Получаем и распарсиваем JSON
  } catch (error) {
    throw error; // Перебрасываем ошибку, если она возникла
  }
}

updateBookById({ title: 'React JS 2024' }, 1)
  .then((books) => console.log('Книга обновлена:', books))
  .catch((error) => {
    console.error('Ошибка при обновлении книги:', error);
  });
