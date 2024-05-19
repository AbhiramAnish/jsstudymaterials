//for (var i=1;i<=50;i++) { // if var the i declared globally
  //       console.log(i)
//}
//console.log("i =",i);// if let i not declared
//  let str="Abhiram"
//  for(let i of str){
//     console.log(i)
//  }

//for in loop

// let student ={
//     name : "Abhi",
//     rollNo : 3,
//     class :"S6 CSE"
// }

// for(let i in student){
//     console.log(i ,": ",student[i])
// }
 
// let i
// for(i=1;i<=100;i++){
//     if(i%2===0)
//     {
//         console.log(i+" is even")
//     }
// }

// create a game 

// let gamenum=23
// let a=prompt("Guess the number between 0 - 25 and you have 5 chances  to guess it ");
// for(let i=0;i<5;i++){
//     if(a==gamenum){
//         console.log(a + " is correct");
//         break;
//     }else{
//         a=prompt(a+" is wrong you have  "+(4-i)+" chance left");
//     }
// }
// console.log("a=" +a+ " gamenum="+gamenum)
// if(a!=gamenum){
//     console.log("you loose");
// 
// template literals
let student ={
        name : "Abhi",
        rollNo : 3,
        class :"S6 CSE"
    };

let output = `my name is ${student.name} my roll number is ${student.rollNo} I am from ${student.class}`;
console.log(`my number is ${1+2}`);
console.log(output);
 
/* str functions 
    str.length
    str.toUpperCase()
    str.toLowerCase()
    str.indexOf('search') // returns index
    str.lastIndexOf('search') //returns last occurance of search in string
    str.concat(str1,str)
    str.trim // removes  extra spaces at start and end
*/

// let str=prompt("Enter name");
// str1 = '@'
// newstr =str1+str+str.length
// console.log(newstr);


