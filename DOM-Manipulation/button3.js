const allButtons = document.querySelectorAll(".all-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e)=>{
    e.target.style.backgroundColor = "Yellow";
    e.target.style.color = "gray";
  })
})