const BASE_URL = 'http://localhost:4040';

function deleteBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      console.error('Ошибка ответа:', response); // Логируем весь ответ
      // Если ответ не успешен, выбрасываем ошибку
      throw new Error(
        `ошибка по адресу ${response.url}, статус ответа ${response.status}, статус ошибки ${response.statusText}}`
      );
    }
    return response.json(); // Возвращаем распарсенный JSON
  });
}

// Пример вызова функции с обработкой ошибок
deleteBookById('40d7')
  .then((books) => console.log('Книга удалена:', books))
  .catch((err) => {
    console.error('Ошибка при удалении книги:', err.message);
  });
