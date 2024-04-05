const allButtons = document.querySelectorAll(".all-buttons button");
// console.log(allButtons.childNodes[0]);

//here i can use any loop to addEventListen
// for(let button of allButtons){
//   button.addEventListener("click", function(){
//     console.log("You Click mee" + this.textContent);
//   });
// }

// allButtons.forEach(function(button){
//   button.addEventListener("click", function(){[
//     console.log(this)
//   ]});
// });

//event object
const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//   console.log("First Button CLick");
// });

//Jab bhi hum kisis bhi element pe eventListener add krte hai, then few exceution happen on backend 
// js enginer -- code line by line execute krta hai, js engine is a Intepreator , also use JIT, just in time compilation also.
// btowser -- js engine + webAPIs (setTimeout and all)

// jav browser ko pata chalta hai ke user ne event perform kiya hai, tab browser 2 kaam krta hai --- 1. callback function jo hota hai usko JS engine ko dygam 2. call function kye sth sth jo event bhi hua hai uski information bhi dega and yeah information humko ek object kye form mai milegi. (event).
// firstButton.addEventListener("click", function(e){
//   console.log(e); //mouseevent dyga console mai
// });

//above we are using the normal function, but now with this knowledge of event object, we can use arrow fucntion also
for(let button of allButtons){
  button.addEventListener("click", (e) => {
    console.log(e.target); //this will give that button which we are clicking.
  })
}