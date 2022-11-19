const toDoForm = document.getElementById("todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input")

//form은 submit이벤트를 거치고 submit이벤트는 페이지를 새로고침하는 것

const toDos = [];

function saveToDo() {
  //JSON.stringify는 어떤 javascript문법이든지 간에 문자열로 바꿔준다
  localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteTodo(event) {
   //event.target은 이벤트가 발생한 html태그를 말한다
   const li = event.target.parentElement;
   li.remove();

}


function paintToDo(newTodo) {
  const li = document.createElement("li")
  const span = document.createElement("span");
  const button = document.createElement("button")
  button.innerText = "X";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button)
  span.innerText = newTodo;
  toDoList.appendChild(li);
}




function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDos.push(newTodo);
  toDoInput.value = "";
  
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);