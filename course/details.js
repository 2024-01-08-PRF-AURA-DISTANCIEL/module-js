const urlParams = new URLSearchParams(location.search);

const id = parseInt(urlParams.get("id"));
const $root = document.getElementById("root");
// axios
//   .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   .then((response) => {
//     const user = response.data;
//     document.title = `Détails ${user.name}`;
//     $root.innerHTML = `
//     <h1>${user.name}</h1>
//     <h2><a href="mailto:${user.email}">${user.email}</a></h2>
//     <p><b>Company : </b>${user.company.name}</p>
//     <p>Phone : <a href="tel:${user.phone}">${user.phone}</a></p>
// `;
//   })
//   .catch((err) => {
//     console.log(err);
//     $root.innerHTML = `<h1>${err.response.status} Not Found</h1>
//     <p>User with id ${id} doesn't exist</p>
//   `;
//   });

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((user) => {
    document.title = `Détails ${user.name}`;
    document.getElementById("root").innerHTML = `
      <h1>${user.name}</h1>
      <h2><a href="mailto:${user.email}">${user.email}</a></h2>
      <p><b>Company : </b>${user.company.name}</p>
      <p>Phone : <a href="tel:${user.phone}">${user.phone}</a></p>
    `;
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("root").innerHTML = `
      <h1>Error</h1>
      <p>User with id ${id} doesn't exist</p>
    `;
  });
