
console.log(100==='100')

console.log(100==100)

var names =[];

names[0] = 'ILMI';
names[1]='taba';
//Array
console.log(names);

for(var i =0; i<names.length; i++){
    console.log('hello,'+names[i].toUpperCase())
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);  

// const array1 = [1,4,8,10,60,5];

// let newArr = array1.map((curElem))


//Conditionals

let iceCream = 'chocolate';
if(iceCream === 'choc') {
    console.log('Yay, I love chocolate ice cream!');
} else {
  console.log('Awwww, but chocolate is my favorite...');
}
//Functions
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  
  }
 console.log( multiply(4, 7));
  multiply(20, 20);
  multiply(0.5, 3);

  function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

 
var x= 5;
var y= 5;

console.log( `is both x and y equal :  ${x==y}`);
console.log(x != y);


var year =2020;
if(year % 4 ===0){
    if(year %100 ===0){

}else{

    console.log("the year "+ year+ " is  leap year");
}
}
else{
    console.log("the year "+ year+ "is not leap year");
}


var area = 'circle';
var PI =3.142 , c=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log('Circle:' + PI*r**2);
    break;
    case 'triangle':
    console.log('triangle:' +(b*c)/2);
    break;
    case 'rectangle':
    console.log('rectangle:' + (c*b));
    break;
    default:
    console.log("please enter valid data");
}        
for(var num =1; num <=10 ; num++){
    var tableOf = 8 ;
   // console.log(tableOf + " * " + num + " = " +  tableOf * num);
   console.log(`${tableOf} * ${num} = ${ tableOf * num}`);
}

//Funtion : is a block of code designed to perform a particular task

// LET VS CONST VS VAR
// 1. WE cannot change (CONST) constant variable
//  var = Function scope
//  let and const = Block scope 

var funAdd = function(a,b){
    return total =a+b;
   
}
var sum = funAdd(15,5);
var sum1 = funAdd(5,5);
console.log('the sum' + sum);
console.log(sum>sum1);

function biodata() {
  var fristName = "ilmi";
  console.log(fristName);

if (true){
  var lastname = "taba";
  console.log('inner'+ fristName);
  console.log('inner'+lastname);

}
console.log('iner' +lastname);
}

biodata();
//work only in  block scope
// function biodata() {
//     let fristName = "ilmi";
//     console.log(fristName);
  
//   if (true){
//     let lastname = "taba";
//     console.log('inner'+ fristName);
//     console.log('inner'+lastname);
  
//   }
//   console.log('iner' +lastname);
//   }
  
//   biodata();

function sum(a,b){//parameter
    var total =a+b;
    console.log(total);
    return total =a+b;
}

sum();
sum(20,30);//arguments
sum(50,50);

// console.log(funExp);

var myName = 'shorna';
console.log(myName);

myName ='ilmi taba';
console.log(myName);


function sum() {
    let a =5 ; b=6 ;
    let sum = a+b;
   return `the sum of the two number is ${a+b}`; 
}
console.log(sum());

//fat Arrow
const sum = () => {
    let a= 5; b= 6;
 
    return `the  sum : ${a+b}`;
}
console.log(sum());

const sum = () => {
   
 
    return `the  suming : ${(a=5) + (b=7)}`;
}
console.log(sum());

// ARRAYS IN JAVASCRIPT

var myFriends = ['ilmi', 'taba', ' wehj']
for(let elements in myFriends){
    console.log(elements);
}

for(let elements of myFriends){
    console.log(elements);
}

var Friends =['ekrj', 'ejhr', 'iweuk', 'ffwh'];
Friends.forEach(function(element, index, array){
    console.log(element + 'index: ' + index);

});
const months =[ 'jan' , 'we' , 'meet' , 'welwk' ,'kwejl'];

const indexOfMonth = months.indexOf('we');

if(indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth, 2); //slice to delete elem
console.log(months);
}else{
    console.log('no such elem found');
}
// Array Meethod in jAVAscript:
const array1 = [1, 4, 9, 12 , 25];
// num >9

let newArr =  array1.filter((curElem , index, arr) => {
    return curElem >9;
})

console.log(array1);
console.log(newArr);

const companies = [
{name : "Company 1", Category : "Finance", start: 1981 , end : 2003 },
{ name : "Company 2", Category : "retail", start: 1992 , end : 2008},
{ name : "Company 3", Category : "russia", start: 1990 , end : 2001},
{ name : "Company 4", Category : "bangladesh", start: 1992 , end : 2020},
{ name : "Company 2", Category : "retail", start: 1992 , end : 2008},
{ name : "Company 2", Category : "retail", start: 1992 , end : 2008},
]

for(let i=0 ; i< companies.length; i++){
    console.log(companies[i]);
}
companies.forEach(function(company){
    console.log(company.name);
});

const ages = [10,20,30,40,50,60,70,80,0,1,2,3];
// let carD = [];
// for(let i = 0; i <ages.length; i++){
//     if(ages[i]>=21){
//         carD.push(ages[i]);
//     }
// }
// ////Filter
// console.log(carD)
const canD  = ages.filter(function(age) {
if(age >= 21){
    return true;

}
});

const canD  = ages.filter(age =>age >=21);
console.log(canD);