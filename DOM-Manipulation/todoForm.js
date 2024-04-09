const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<span>${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  
  newLi.innerHTML = newLiInnerHTML;
  todoList.append(newLi);
  todoInput.value = "";
});

//todolist is grandparent of li,done and remove
todoList.addEventListener("click", (e)=> {
  if(e.target.classList.contains("done")){
    //now reach to span tag - means parentNode ka slibiling hai span.
    const spanText = e.target.parentNode.previousElementSibling;
    spanText.style.textDecoration = "line-through";
  }

  if(e.target.classList.contains("remove")){
    //in remove we need to reomve li , so we need to go parentNode to parentNode, remove ka parent hai todo-buttons and todo-buttons ka parent hai li.
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
})