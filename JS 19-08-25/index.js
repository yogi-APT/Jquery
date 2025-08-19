import {add,sub} from "./addition.js";
import {multiple,div}  from "./mul.js";
let num1=parseInt(prompt("Enter the Num1:"))
let num2=parseInt(prompt("Enter the Num2:"))
let para=document.querySelectorAll('p');
para[0].innerText=add(num1,num2)
para[1].innerText=multiple(num1,num2)
para[2].innerText=div(num1,num2)
para[3].innerText=sub(num1,num2)