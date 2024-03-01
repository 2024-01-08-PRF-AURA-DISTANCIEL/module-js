const tb1 = [];
const tb2 = [];

for (let i = 0; i < 10; i++) {
  tb1.push(generateRandomInt(200));
}

for (let i = 0; i < 15; i++) {
  tb2.push(generateRandomInt(10));
}

function generateRandomInt(max) {
  // const randomInt = Math.floor(Math.random() * max) + 1;
  // return randomInt;
  return Math.floor(Math.random() * max) + 1;
}

function add(a, b) {
  return a + b;
}

function rotate(arr, rotations) {
  const result = [...arr];
  for (let i = 1; i <= rotations; i++) {
    const lastElement = result.pop();
    result.unshift(lastElement);
  }
  return result;
}

function isMajor(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function isMajor(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

function isMajor(age) {
  return age >= 18;
}

// const tableau = ["1", "2", "4", "5"];
// const tableau2 = ["1", "2", "4", "5"];
// let isequal = true;
// for (let i = 0; i < tableau.length; i++) {
//   if (tableau[i] != tableau2[i]) {
//     isequal = false;
//     break;
//   }
// }
// if (isequal) {
//   alert("tableaux identique");
// } else {
//   alert(`c'est différent`);
// }

// SOLID -> s : single responsability
function areArraysEqual(firstArray = [], secondArray = []) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}


if(areArraysEqual([2,3],[2,3])){
  console.log("Ouii")
}else{
  console.log("Noonnn")
}