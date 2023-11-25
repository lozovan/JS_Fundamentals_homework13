/*
2. На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), 
в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, 
завантажується файл books.json і з нього виводяться всі назви авторів у вигляді 
списку на HTML-сторінку.
*/
const runTaskButton = document.querySelector("#taskTwo");
const taskTwoContent = document.querySelector("#taskTwoContent");

runTaskButton.addEventListener('click', function () {
    fetch("books.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const ulElement = document.createElement('ol');
            data.forEach(element => {
                const authorName = document.createElement('li');
                authorName.textContent = element.author;
                ulElement.appendChild(authorName);
            });
            taskTwoContent.innerHTML = '';
            taskTwoContent.appendChild(ulElement);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            taskTwoContent.innerHTML = 'Error fetching data. Please try again later.';
        });
});
