import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
var rand_who = Math.floor(Math.random()*who.length);
var rand_action = Math.floor(Math.random()*action.length);
var rand_what = Math.floor(Math.random()*what.length);
var rand_when = Math.floor(Math.random()*when.length);

document.getElementById("myexcuse").innerHTML = who[rand_who] + " " + action[rand_action] + " " + what[rand_what] + " " + when[rand_when];

console.log("Hello Rigo from the console!");
};
