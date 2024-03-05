const $usersList = document.getElementById("users-list");
// V1 using fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     for (let user of users) {
//       $usersList.innerHTML += CreateUser(user);
//     }
//   });

// V2 using axios
axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  const users = response.data;
  for (let user of users) {
    $usersList.innerHTML += CreateUser(user);
  }
});

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
