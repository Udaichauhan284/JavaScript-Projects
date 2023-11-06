const container = document.querySelector('.container');
const form = document.createElement('form');
const inputBox = document.createElement('input');
const button = document.createElement('button');
const list = document.createElement("ul");

button.textContent = "Add";
inputBox.style.margin = "30px";
inputBox.style.padding = "10px";
inputBox.style.fontSize = "20px";
button.style.padding = "10px 10px";
button.style.fontSize = "25px";
document.body.style.backgroundColor = "purple";
list.style.color = "white";
list.style.fontSize = " 30px";
form.append(inputBox, button);
container.append(form, list);

button.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  li.textContent = inputBox.value;
  list.append(li);
  inputBox.value = "";

  li.addEventListener("click",()=>{
    li.style.textDecoration = "line-through";
  });
});
