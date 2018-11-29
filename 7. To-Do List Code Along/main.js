// SECTION 13 LECTURE 157
// TO-DO LIST CODE ALONG

let todos = ["Buy new turtle"];
let input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  // ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Quitted the todo");

function listTodos() {
  console.log("***");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("***");
}

function addTodo() {
  // ask for new todo
  let newTodo = prompt("enter new todo");
  // add to array
  todos.push(newTodo);
  alert("item added");
}

function deleteTodo() {
  let index = prompt("Enter index of todo to delete.");
  // actually delete the todo
  //splice()
  todos.splice(index, 1);
  alert("item deleted");
}
