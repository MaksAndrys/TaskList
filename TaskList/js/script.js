const taskInput = document.querySelector("#input-task");
const addButton = document.querySelector("#button-add");
const todoList = document.querySelector(".todo-list");
const filterButton = document.querySelector(".filter-todo");

addButton.addEventListener("click", () => {
   event.preventDefault();

   const todoElement = document.createElement("div");
   todoElement.classList.add("todo");

   const newTodo = document.createElement("li");
   newTodo.innerText = taskInput.value;
   newTodo.classList.add("todo-item");
   todoElement.appendChild(newTodo);

   const doneButton = document.createElement("button");
   doneButton.innerHTML = '<i class = "fas fa-check"></i>';
   doneButton.classList.add("done-button");
   todoElement.appendChild(doneButton);

   const removeButton = document.createElement("button");
   removeButton.innerHTML = '<i class = "fas fa-trash"></i>';
   removeButton.classList.add("remove-button");
   todoElement.appendChild(removeButton);

   todoList.appendChild(todoElement);

   taskInput.value = "";
});

todoList.addEventListener("click", () => {
   const item = event.target;

   if (item.classList[0] === "remove-button") {
      item.parentElement.classList.add("removed");
      setTimeout(() => {
         item.parentElement.remove();
      }, 300);
   }

   if (item.classList[0] === "done-button") {
      item.parentElement.classList.toggle("completed");
   }
});

filterButton.addEventListener("click", filterTodo);

function filterTodo(e) {
   const todos = todoList.childNodes;
   todos.forEach((todo) => {
      switch (e.target.value) {
         case "all":
            todo.style.display = "flex";
            break;
         case "completed":
            if (todo.classList.contains("completed")) {
               todo.style.display = "flex";
            } else {
               todo.style.display = "none";
            }
            break;
         case "uncompleted":
            if (!todo.classList.contains("completed")) {
               todo.style.display = "flex";
            } else {
               todo.style.display = "none";
            }
            break;
      }
   });
}
