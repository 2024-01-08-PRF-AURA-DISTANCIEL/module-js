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

const $todoList = document.querySelector("#todos");

for (let todo of todos) {
  const $todo = Todo(todo);
  $todoList.appendChild($todo);
}

function Todo(name) {
  const $todo = document.createElement("li");
  $todo.innerText = name;
  const $deleteButton = Button("x", deleteTodo);
  $todo.appendChild($deleteButton);
  $todo.classList.add("todo");
  $todo.addEventListener("click", toggleTodoStatus);
  return $todo;
}

function Button(label, onClick) {
  const $button = document.createElement("button");
  $button.innerText = label;

  $button.addEventListener("click", onClick);
  return $button;
}

function deleteTodo(event) {
  event.stopPropagation();
  this.parentElement.remove();
}

// Adding a Todo from a Form
const $addTodoForm = document.querySelector("#addTodoForm");
const $newTodo = document.querySelector("#newTodo");

$addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const $errorTodo = document.querySelector("#err_todo");
  if ($newTodo.value.length < 3) {
    $errorTodo.innerText =
      "The name of the todo should have at least 3 characters";
    return;
  }
  $errorTodo.innerText = "";
  $todoList.appendChild(Todo($newTodo.value));
  $newTodo.value = "";
  updateCounter();
});

function updateCounter() {
  const $unfinishedCounter = document.querySelector(".unfinishedCounter");
  $unfinishedCounter.innerText = document.querySelectorAll(
    ".todo:not(.finished)"
  ).length;
}

function toggleTodoStatus() {
  this.classList.toggle("finished");
  updateCounter();
}

const $showFinished = document.querySelector(".showFinished");
$showFinished.addEventListener("click", function (e) {
  const $todos = document.querySelectorAll(".todo");
  console.dir(this);
  if (this.checked) {
    for (const $todo of $todos) {
      if (!$todo.classList.contains("finished")) {
        $todo.classList.add("hidden");
      }
    }
  } else {
    for (const $todo of $todos) {
      if (!$todo.classList.contains("finished")) {
        $todo.classList.remove("hidden");
      }
    }
  }
});

updateCounter();
