import users from "./users-optimized.js";

const urlParams = new URLSearchParams(location.search);

const id = parseInt(urlParams.get("id"));
const user = users[id];

const $root = document.getElementById("root");

document.title = `Détails ${user.name}`;
$root.innerHTML = `
    <h1>${user.name}</h1>
    <h2><a href="mailto:${user.email}">${user.email}</a></h2>
    <p><b>Company : </b>${user.company.name}</p>
    <p>Phone : <a href="tel:${user.phone}">${user.phone}</a></p>
`;
