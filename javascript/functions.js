// function hello(){
//     console.log("hello");
// }

// hello();      

// function Roll_dice(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }
// Roll_dice();
// Roll_dice();
// Roll_dice();
// Roll_dice();


// function printinfo (name,age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printinfo("shraddha",23);


// //sum after the function

// let sum = 54; //global scope
// function calsum(a,b){
//     let sum = a+b;//function scope
//     console.log(sum);
// }
// calsum(1,2);
// console.log(sum);




// function multipleGreet(func , count){ //higher order function 
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
//     let greet = function(){
//         console.log("hello");
//     }
// multipleGreet(greet,2);

// //Higher Order Function
// function oddorevenrequest(){
//     if(request == "odd") {
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(request=="even"){
//         let even = function(n) {
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else {
//         console.log("Wrong request");
//     }
// }
// let request = "odd";//or even

// let func = oddorevenrequest(request);
//  func(9);

// //Method
// const calculator ={
//     num : 55,
//     add :  function (a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }
// console.log(calculator.add(5,1));


//method can this way aalso
//Method
const calculator ={
    num : 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(calculator.add(5,8));