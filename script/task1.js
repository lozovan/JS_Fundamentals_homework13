/*
1.На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), 
в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, 
сервер обробляє запит і надсилає його на HTML-сторінку оновлюючи вміст кнопки 
так як показано в прикладі.
*/
// const runTaskButton = document.querySelector("#taskOne");

// runTaskButton.addEventListener('click', function () {
//     const ajax = new XMLHttpRequest();
//     ajax.onload = function () {
//         if (ajax.status !== 200) {
//             console.log(ajax.status + " " + ajax.statusText);
//         } else {
//             const currentDate = new Date();
//             runTaskButton.innerText = "Your vote is accepted: " + currentDate
//             console.log(ajax.status + " " + ajax.statusText);
//         }
//     }
//     ajax.open("GET", window.location.href);
//     ajax.send();
// });
/* new  */
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', async function () {
    try {
        const response = await fetch(window.location.href);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const currentDate = new Date();
        runTaskButton.innerText = "Your vote is accepted: " + currentDate;
        console.log("Request successful");
    } catch (error) {
        console.error("Error:", error.message);
    }
});