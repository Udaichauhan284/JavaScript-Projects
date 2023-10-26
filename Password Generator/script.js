const passwordBox = document.querySelector('#password');
const btn = document.querySelector('button');
const copy = document.querySelector('img');
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*+_-";

const allChars = upperCase + lowerCase + number + symbol;
btn.addEventListener('click', ()=>{
  let password = '';
  while(length > password.length){
    password+= allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
});

copy.addEventListener('click',()=>{
  passwordBox.select();
  document.execCommand("copy");
  alert("Copied");
});