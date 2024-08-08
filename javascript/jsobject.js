// const student ={
//     name : "suraj",
//     age : 23,
//     marks:92.2
// };
// const item ={
//     price :100.99,
//     discount:50,
//     colors :["red","pink"]
// };

// const post = {
//     username : "@shrdhakhapra",
//     content: "This is my #first post",
//     like:190,
//     reposts:899,
//     tags : ["@apnacollege","@delta"]
// }; 


// // Add or Update values in object
// const stu = {
//         name : "eudos",
//         age : 12,
//         roll_no :12,
//         city:"mumbai"
// }
// console.log(stu);
// console.log(stu.city);
// stu.city ="delhi";
// console.log(stu.city); //update new value
// console.log(stu);

//Object of object

// const classinfo ={
//     aman :{
//         grade :"A+",
//         city :"delhi"
//     },

//     shradhha :{
//         grade :"A",
//         city:"pune"
//     },
//     karan:{
//         grade :'O',
//         CITY : 'mumbai',
//     }
// }


// console.log(classinfo);
// console.log(classinfo.aman.city);
// stu.city ="delhi";
// console.log(stu.city); //update new value
// console.log(stu);



// Array of Object 
// const das = [
//  {
//         name :'Aman',
//         grade :"A+",
//         city :"delhi"
//     },
//         {
//         name :"shraddha",
//         grade :"A",
//         city:"pune"
//     },
//     {
//         name : "karan",
//         grade :'O',
//         CITY : 'mumbai',
//     }

// ];

// console.log(das);
// console.log(das[1].name);



//Guessing Game 

const max = prompt("enter the maximumno");
console.log(max);

const random = Math.floor(Math.random()* max) +1;
let guess = prompt("Guess the no");

while(true){
    if (guess =="quit"){
        console.log("user quit");
        break;
    }
    if (guess ==random){
        console.log("you are right congrtas ! random no was",random);
        break;
    }
    else if (guess < random){
        guess =prompt("Your guess was too small please try again");
    }
    else{
        guess = prompt("You guess was too large please try again later");
    }
}

 