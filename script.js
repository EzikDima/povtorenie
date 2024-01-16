// 1
let myVar = 10;
 document.getElementById('div1').innerHTML=myVar;
// 2
let str = '123';
let num =parseInt(str);
document.getElementById('div2').innerHTML = num;
// 3
let number = 123;
let str1 = num.toString();
document.getElementById('div3').innerHTML = str;
//4
document.getElementById('div4').innerHTML = typeof myVar;
//5
let bool = true;
let str2 = bool.toString();
document.getElementById('div5').innerHTML = str2;
//6
let str3 = 'true';
let bool1 = Boolean(str3);
document.getElementById('div6').innerHTML = bool;
//7
let myObj = { name: 'John', age: 30 };
document.getElementById('div7').innerHTML = JSON.stringify(myObj);
//8
let isObject = typeof myVar === 'object'
document.getElementById('div8').innerHTML = isObject;
//9
let numb = 123.456;
let str4 = numb.toFixed(2);
document.getElementById('div9').innerHTML = str4;
//10
let str5 = '123.456';
let numbers = Math.round(parseFloat(str5));
document.getElementById('div10').innerHTML = numbers;