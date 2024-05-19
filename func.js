// function hi(){
//     console.log("Hello World");
// }
// function sumof(a,b){
//     x=Number(a)
//     y=Number(b)
//     let sum=x+y;
//     console.log(`${sum} is the sum of ${a} and ${b}`);
// }
// hi();
// let a=prompt( "Enter first number" );
// let b=prompt( "Enter second number" );
// sumof(a,b);

// // arrow functions ->

// var Printh =()=>{
//     console.log("Print Hello Function");
// }
// Printh();

// // returns vowels of a string

// function checkvov(str){
//     let i,count=0;
//     for(i=0;i<str.length;i++){
//         if (str[i]=='A'||
//             str[i]=='a'||
//             str[i]=='E'||
//             str[i]=='e'||
//             str[i]=='I'||
//             str[i]=='i'||
//             str[i]=='O'||
//             str[i]=='o'||
//             str[i]=='U'||
//             str[i]=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// let string=prompt("Please enter a String");
// let count=checkvov(string);
// console.log(`The Number of Vowals  in "${string}" are ${count}`);


// // highre order functions eg: foreach  a function with callback ie returns a function value/parameter
// let arr=[1,2,3,4];

// arr.forEach((val)=>{
//     console.log(val*val);
// });

// array methods (google it)
// eg: map(create new array)
//     filter

// let arr=[1,2,3,4];

// let newarr=arr.filter((val)=>{
//         return val%2==0;
// })

// let arr=[1,2,3,4];
// let newarr=arr.reduce((ret,cur)=>{  // reduce returns single result in this ret is fixed at first element and cur keeps moving towards the end
//     return ret>cur ? ret: cur;
// })


//practice questions

let n = prompt( "Enter a number" );
let num=[];
for(let i=0;i<n;i++){
    num[i]=i+1;
}
    console.log(num);
let sumarr=num.reduce((prev,cur)=>{
    return prev + cur ;
})
console.log(`Sum is ${sumarr}`);

let mularr=num.reduce((prev,cur)=>{
    return prev*cur ;
})
console.log(`product is ${mularr}`);


