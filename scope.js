// Exemple 1
const fname = "Alexandre 1";
{
  const fname = "Alexandre 2";
  {
    const fname = "Alexandre 3";
    {
      const fname = "Alexandre 4";
      console.log(fname);
    }
  }
}

// Exemple 2
let lname = "chris";
if (true) {
  let lname = "Jean";
  console.log("Dans le IF : ", lname);
}
console.log("En dehors du IF : ", lname);
