// for of loop in arrays

// let heros=["Abhi","Rahul","Akash"];
// for(let i of heros){
//     console.log(`Hero Name: ${i}`);
// }

// let marks=[85,97,44,37,76,60];
// let i=0,avg,sum=0;
// for (i=0;i<marks.length;i++){
//     sum+=marks[i];
//     }
// avg=sum/marks.length
// console.log("The average mark is "+ avg);

// let currentp=[250,645,300,900,50],newprice=[],n=0;
// console.log("Current prices :")
// for(let i of currentp) {  // for of loop  gives direct value but not index
//     console.log(i);
//     newprice[n]=i;
//     n++
// }                //for 2 arrays
// n=0;
// console.log("New prices :")
// for(let i of currentp) {
//     let discount=i/10
//     newprice[n]-=discount;
//     console.log(newprice[n]);
//     n++;
// }

// let currentp=[250,645,300,900,50],n=0;
// console.log("Current prices :")
// for(let i of currentp) {  // for of loop  gives direct value but not index
//     console.log(i);
// }                //for 1 array
// console.log("New prices :")
// for(let i of currentp) {
//     let discount=i/10
//     currentp[n]-=discount;
//     console.log(currentp[n]);
//     n++;
// }

// array methods

// Push() -  adds an element to the end of the array
// syntax  arr.push(1,2,3)
// Pop() - removes the last element from the array and returns it
// syntax  arr.pop()   /   del=arr.pop() 
// toString() -  converts all elements in the array into a string
// syntax arr.toString

// other just google it

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// remove first company
//companies.shift();

companies.splice(2,1,"Ola"); // at position 2 remove 1 add "ola"

companies.push("Amazon");  

companies.toString();