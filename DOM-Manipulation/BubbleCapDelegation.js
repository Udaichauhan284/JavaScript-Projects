console.log("Hello World");
const grandParent = document.querySelector(".grandparent");

// const parent = document.querySelector(".parent");

// const child = document.querySelector(".child");

//Now capruting phase will start, it will go down to taget element, and then start the bubbling, to start the capturing you need to set the TRUE value.

// grandParent.addEventListener("click", (e) => {
//   console.log("Captured ||| Grandparent");
// },true);

// parent.addEventListener("click", (e) => {
//   console.log("Captured ||| Parent");
// },true);

// child.addEventListener("click", (e) => {
//   console.log("Captured ||| Child");
// },true);

//now here i am adding event ono all three div, and in brower if i click on child, so browesr automatically call parent click and grandparent click, This known as Event Bubbling.

//These are non capturing one, by default capturing value is false;

// grandParent.addEventListener("click", (e)=>{
//   console.log("You click on GrandParent");
// })

// parent.addEventListener("click", (e)=>{
//   console.log("You click on Parent");
// })

// child.addEventListener("click",(e)=>{
//   console.log("You click on Child");
// })

//Event Delegation, no need to add the event listener on every div, like parent, child, Just add event listesener on the top one like Grandparent. so if you click on child too, it will bubble up and see where the listener is and show the result.

grandParent.addEventListener("click", (e)=>{
  console.log(e.target.textContent);
})
