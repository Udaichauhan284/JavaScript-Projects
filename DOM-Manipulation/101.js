//DOM - Document Object Model
/* The document object model (DOM) connects web pages to script or programming language by representing the structure of a document.
The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM method allow programmatic access to the tree. WIth them, we can change the document's structure, style or content.
*/
//getElement by id-access the node/element by its id, this will return the object.
const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

//get Element by call-access the node/element by its class name
const navItems = document.getElementsByClassName("nav-items");
// console.log(navItems);

//querySelector and querySelectorAll, querySelector only return the first one, for geting all the element for that id or class use querySelectorAll.
const mainHeading1 = document.querySelector("#main-heading");
// console.log(mainHeading1);

//get the text of node - use two method innerText or textContent, textContent will give all text even if it is hidden, on the otherhand innerText will text only
const getTextOfMainHeading = document.getElementById("main-heading");
console.log(getTextOfMainHeading.innerText);
console.log(getTextOfMainHeading.textContent); //Manage Your Task Hello
console.log(getTextOfMainHeading.innerHTML); //this will give all html for that, not recommended to use.

//change the text for that
// getTextOfMainHeading.innerText = "I am Changing the Content";
// console.log(getTextOfMainHeading.innerText);

//Geting the style for a node
const styleMainHeading = document.querySelector("div.headline h2");
// console.log(styleMainHeading.style);
// styleMainHeading.style.color = "Red";

//get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href")); //#Home

//setting attribute - i am changin the attribute
// link.setAttribute("href","ChangeHome");
// console.log(link.getAttribute("href"));

// const inputElementAttribute = document.querySelector(".form-todo input");
// console.log(inputElementAttribute.getAttribute("placeholder")); //Add Todo

//getting all the elemeent using className, this will give you a HTML collection like
const navItem = document.getElementsByClassName("nav-item");
// console.log(navItem); //HTMLCollection
//if you need 1 navItem - using like navItem[0]
console.log(navItem[0]); //<li>fo home</li>
console.log(navItem[1]);
console.log(navItem[2]);

//if we use querySelectorAll - this will return the NodeList
const navItem1 = document.querySelectorAll(".nav-item");
console.log(navItem1); //NodeList
console.log(navItem1[0]);
console.log(navItem1[1]);
console.log(navItem1[2]);

//changing the color of Navbar links
const navItem2 = document.getElementsByTagName("a");
console.log(navItem2); //HTMLCollection(3), 3 - we have 3 links in navbar

//On HTMLCollection, we can use two loops, beacuse these are Array like object - so we can work on index for thta, but keep in mind for HTMLCollection forEach Method will not work.
// for(let i=0; i<navItem2.length; i++){
//   navItem2[i].style.backgroundColor = "white";
//   navItem2[i].style.color = "Red";
// }

//for of loop
// for(let nI of navItem2){
//   nI.style.backgroundColor = "green";
//   nI.style.color = "Red";
// }

//for using forEach loop, change the navItem2 into Array.
// navItem2 = Array.from(navItem2);
//now i can use forEach loop

/* HTMLCollection vs NodeList
The main difference between an HTMLCollection and a NodeList
is that one is live and one is static. This means when a element is appended to the DOM, so a live node will recognize the new element while a static node will not.

1.HTMLCollection
The element method getElementByClassName() and getElementByTagName() return a live HTMLCollection. It only includes the matching element (e.g. class name or tag name) and does not include text nodes, it provides only two methods item and nameItem.

2. NodeList
The element method "querySelectorAll()" return a static NodeList. They look like array but are not.
NodeList have a difined forEach method as well as a few other methods including item, entries, key and values.

NodeList behave differently depending on how you access them, if you access element using childNodes, the retured list is live and will update as more element are added to the node, It it's accessed using querySelectorAll(), the returned list is static and will not update if more elements are added to the node.
*/

//Getting the Root and child nodes
const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes); //NodeList - HTML

const htmlNode = rootNode.childNodes[1];
console.dir(htmlNode); //return in object
console.log(htmlNode.childNodes); //NodeList(3) [head,text,body]
console.log(htmlNode.childNodes[1]); //text

//parent node
// console.log(htmlNode.childNodes[1].parentElement); //html kye childnode text ka parent kon hai, html itself.

//silbiling
// console.log(htmlNode.childNodes[1].nextSibling); //body

//head node child
// console.log(htmlNode.childNodes[2].childNodes);

const body = document.body;
// console.log(body);

const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
// console.log(title);

//Need to see how many classes in section todo
const section = document.querySelector(".todo-section");
console.log(section.classList); //DOMTokenList(2)

//adding class in section using js
// section.classList.add("bg-dark");

//removing the class
// section.classList.remove("bg-dark");

//Conatins the class - checking
const ans = section.classList.contains("container"); 
console.log(ans); // true

//Toggle - if class there, it will remmove that class, if class not there, it will add it.
// section.classList.toggle("bg-dark");

//Creating the element by JS.
//document.createElement()
//append, prepend, remove
const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Learn DSA");
newTodoItem.appendChild(newTodoItemText);
//appendChild is old method.
console.log(newTodoItem);

//now i hace to add in div todo-item
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem); //appened in todo-list

//simple method
const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Learn Typescript";
// todoList.append(newTodoItem1);
//append is new method. this will add in last

//now use prepend
todoList.prepend(newTodoItem1);

//how to get the dimension of element. height, width
const sectionTodo1 = document.querySelector(".todo-section");
console.log(sectionTodo1.getBoundingClientRect().height);
console.log(sectionTodo1.getBoundingClientRect().width);