const inputText = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
  if (inputText.value === '') {
    alert('Please Enter Your Task to be added');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputText.value = '';
  saveData();
});

listContainer.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
