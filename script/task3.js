/*
3. Використати сервіс: https://randomuser.me/
Та при кожному завантаженні сторінки робити запит до API та рендерити базову 
інформацію про користувача (аватар, ім`я, вік, стать, 
країна, логін, пароль, пошта).
*/
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', async function () {
    const response = await fetch("https://randomuser.me/api/");
    const jsonObject = await response.json();
    const user = jsonObject.results[0];

    const resultText = `
        <p>Avatar:<img src="${user.picture.large}" alt="Avatar"></p>
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Age: ${user.dob.age}</p>
        <p>Gender: ${user.gender}</p>
        <p>Country: ${user.location.country}</p>
        <p>Username: ${user.login.username}</p>
        <p>Password: ${user.login.password}</p>
        <p>Email: ${user.email}</p>`;

    taskThreeContent.textContent = ''; // Очистити попередні дані
    taskThreeContent.insertAdjacentHTML('beforeend', resultText);
});