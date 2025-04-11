// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.addEventListener("DOMContentLoaded", function () {
  const userNameInput = document.getElementById("userNameInput");
  const getUserButton = document.getElementById("getUserButton");
  const userCity = document.getElementById("userCity");

  getUserButton.addEventListener("click", function () {
    const enteredName = userNameInput.value.trim().toLowerCase();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        const foundUser = users.find(
          (user) => user.name.toLowerCase() === enteredName
        );

        if (foundUser) {
          userCity.textContent = `City: ${foundUser.address.city}`;
        } else {
          userCity.textContent = "User not found";
        }
      })
      .catch(function (error) {
        console.error("Error fetching user data:", error);
      });
  });
});
