// var a=10,b=20;
// a**=4;
// console.log("a = ",a);
// console.log("a = ",a==b); // true or false

// let age =20;

// // let result = age >= 18 ? "adult": "minor";  simpler and compact if-else
// // console.log(result); // or also   
// let result = age >= 18 ? console.log("adult"): console.log("minor");


// MDN documentation

/*
console.log("sum = ",a+b);
console.log("subtract = ",a-b);
console.log("product = ",a*b);
console.log("division = ",b/a); 
console.log("remainder = ",a%b); 
console.log("a^b =",a**b); // 10^20 other expressions are ++ and --
*/

// console.log("a++ = ",a--);
// console.log("a = ",a);
 // a+=4 a=a+4 a**=2

 /* = assignment operator == comparison ===(equal and type)  != not equal !== (not equal and type) > greater than < less than 
  >= greater than or equalto */

let a=prompt("enter a number");
if(a%5==0)
{
    console.log("The number" ,a,  "is divisible by 5");
}
else{
    console.log(a," is not divisible by 5");
}