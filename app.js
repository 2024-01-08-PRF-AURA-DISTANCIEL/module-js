const todos = [
  "Text a friend I haven't talked to in a long time",
  "Plan a vacation I've always wanted to take",
  "Take cat on a walk",
  "Go to the gym",
  "Have a photo session with some friends",
  "Learn calligraphy",
  "Learn Express.js",
  "Plan a trip to another country",
  "Take a hike at a local park",
  "Bake pastries for me and neighbor",
  "Contribute code or a monetary donation to an open-source software project",
  "Watch a classic movie",
  "Do something nice for someone I care about",
];

const $todoList = document.getElementById("todos");

for (let todo of todos) {
  const $newTodo = document.createElement("li");
  $newTodo.classList.add("todo");
  $newTodo.innerText = todo;
  $newTodo.addEventListener("click", function () {
    this.classList.toggle("finished");
  });

  const $deleteBtn = document.createElement("button");
  $deleteBtn.innerText = "x";
  $deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    this.parentElement.remove();
  });

  $newTodo.append($deleteBtn);
  $todoList.append($newTodo);
}
