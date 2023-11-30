/*
3. Використати сервіс: https://randomuser.me/
Та при кожному завантаженні сторінки робити запит до API та рендерити базову 
інформацію про користувача (аватар, ім`я, вік, стать, 
країна, логін, пароль, пошта).
*/
// const runTaskButton = document.querySelector("#taskThree");

// runTaskButton.addEventListener('click', async function () {
//     const response = await fetch("https://randomuser.me/api/");
//     const jsonObject = await response.json();
//     const user = jsonObject.results[0];

//     const resultText = `
//         <p>Avatar:<img src="${user.picture.large}" alt="Avatar"></p>
//         <p>Name: ${user.name.first} ${user.name.last}</p>
//         <p>Age: ${user.dob.age}</p>
//         <p>Gender: ${user.gender}</p>
//         <p>Country: ${user.location.country}</p>
//         <p>Username: ${user.login.username}</p>
//         <p>Password: ${user.login.password}</p>
//         <p>Email: ${user.email}</p>`;

//     taskThreeContent.textContent = ''; // Очистити попередні дані
//     taskThreeContent.insertAdjacentHTML('beforeend', resultText);
// });
/* new */
const loadUserButton = document.getElementById('loadUser');
const avatarContainer = document.getElementById('avatarContainer');
const nameElement = document.querySelector('.name');
const ageElement = document.querySelector('.age');
const genderElement = document.querySelector('.gender');
const countryElement = document.querySelector('.country');
const usernameElement = document.querySelector('.username');
const passwordElement = document.querySelector('.password');
const emailElement = document.querySelector('.email');

loadUserButton.addEventListener('click', async function () {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        
        avatarContainer.innerHTML = `<img src="${data.results[0].picture.large}" alt="Avatar">`;

        
        nameElement.textContent = `Name: ${data.results[0].name.first} ${data.results[0].name.last}`;
        ageElement.textContent = `Age: ${data.results[0].dob.age}`;
        genderElement.textContent = `Gender: ${data.results[0].gender}`;
        countryElement.textContent = `Country: ${data.results[0].location.country}`;
        usernameElement.textContent = `Username: ${data.results[0].login.username}`;
        passwordElement.textContent = `Password: ${data.results[0].login.password}`;
        emailElement.textContent = `Email: ${data.results[0].email}`;
        
        const user = null;
    } catch (error) {
        console.error('Error:', error.message);
    }
});