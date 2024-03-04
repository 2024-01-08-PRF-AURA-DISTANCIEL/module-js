import users from "./users.js";

const urlParams = new URLSearchParams(location.search);

const id = parseInt(urlParams.get("id"));
const user = users.find((user) => user.id === id);

const $root = document.getElementById("root");

if (user) {
  document.title = `Détails ${user.name}`;
  $root.innerHTML = `
    <h1>${user.name}</h1>
    <h2><a href="mailto:${user.email}">${user.email}</a></h2>
    <p><b>Company : </b>${user.company.name}</p>
    <p>Phone : <a href="tel:${user.phone}">${user.phone}</a></p>
`;
} else {
  $root.innerHTML = `<h1>404 Not Found</h1>
    <p>User with id ${id} doesn't exist</p>
  `;
}
