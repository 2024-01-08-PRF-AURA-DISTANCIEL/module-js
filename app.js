import users from "./users.js";

const $usersList = document.getElementById("users-list");

for (let user of users) {
  $usersList.innerHTML += CreateUser(user);
}

function CreateUser(user) {
  return `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.address.city}</td>
      <td>${user.phone}</td>
      <td>${user.company.name}</td>
      <td><a href="details.html?id=${user.id}">Voir</a></td>
    </tr>
  `;
}
