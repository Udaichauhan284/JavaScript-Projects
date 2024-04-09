// console.log("Hello WOrld");
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//   console.log("You clicke me ");
// }

//method - addEventListen - good way to add event on button click.
const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", ()=>{
//   console.log("You Click mee Ahhhhhh");
// });

//This - if you use this inside the addEventListner - this will refeclt to button only, but if you use arrow function then this will refeclt window only.
// btn.addEventListener("click", function(){
//   console.log("You click me from normal function");
//   console.log("Value of this from normal function");
//   console.log(this); //button itself;
// });

//use of arrow function, in this will goes to  window
// btn.addEventListener("click", ()=>{
//   console.log("You click me from arrow function");
//   console.log("Value of This");
//   console.log(this); //window object
// });

//Keypress event, Mouseover event
const body = document.body;

body.addEventListener("keypress", (e) => {
  console.log(e.key); //it will show the key.
});

const mainButton = document.querySelector(".btn");
mainButton.addEventListener("mouseover", ()=>{
  console.log("Mouse Over event occured!!!");
});

mainButton.addEventListener("mouseleave", ()=>{
  console.log("Mouse Leave event ocurred!!!");
});