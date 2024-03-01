**TP1**

```js
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isBorrowed = false;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  borrowBook(title) {
    const book = this.findBookByTitle(title);
    if (book && !book.isBorrowed) {
      book.isBorrowed = true;
      return true;
    }
    return false;
  }
}
```

**TP2 Shopping Card**

```js
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    this.products = this.products.filter(
      (product) => product.name !== productName
    );
  }

  calculateTotal() {
    return this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
```

**TP3 Gestionnaire des taches**

```js
const Priorities = Object.freeze({
  1: "High",
  2: "Medium",
  3: "Low",
  4: "Undefined",
});
class Task {
  constructor(title, priority) {
    this.title = title;
    this.priority = priority;
    this.completed = false;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  showTasks() {
    this.tasks.forEach((task) =>
      console.log(
        `${task.title}, Priority: ${task.priority}, Completed: ${task.completed}`
      )
    );
  }

  showTasksByPriority() {
    this.tasks
      .sort((a, b) => b.priority - a.priority)
      .forEach((task) => console.log(task.title));
  }

  showUncompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  countUncompletedTasks() {
    return this.showUncompletedTasks().length;
  }

  completeTask(title) {
    const task = this.tasks.find((task) => task.title === title);
    if (task) task.completed = true;
  }

  formatPriorities() {
    return this.tasks.map((task) => {
      return { ...task, priorityText: Priorities[task.priority] };
    });
  }

  groupByPriority() {
    let groups = {};

    this.sortByPriority().forEach((task) => {
      if (!groups[task.priority]) groups[task.priority] = [];
      groups[task.priority].push(task);
    });

    return groups;
  }
}
```

**TP 4 : Occurence lettres**

```js
//v1
function countLetterOccurrencesUsingArray(text) {
  const counts = [];
  for (const letter of text) {
    if (letter.match(/[a-z]/i)) { // Vérifie si le caractère est une lettre
      const letterLowerCase = letter.toLowerCase(); // Convertit le caractère en minuscule pour une comparaison insensible à la casse
      const index = counts.findIndex((elem) => elem.letter === letterLowerCase);
      if (index !== -1) {
        counts[index].count++;
      } else {
        counts.push({ letter: letterLowerCase, count: 1 }); // Stocke le caractère en minuscule
      }
    }
  }
  return counts;
}

```

```js
//v2 objects
function countLetterOccurrences(text) {
  const counts = {};
  for (const letter of text) {
    if (letter.match(/[a-z]/i)) { // Vérifie si le caractère est une lettre
      const letterLowerCase = letter.toLowerCase(); // Convertit le caractère en minuscule
      counts[letterLowerCase] = counts[letterLowerCase] ? counts[letterLowerCase] + 1 : 1;
    }
  }
  return counts;
}
```
