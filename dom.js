// let heading=document.getElementById("heading"); // getelementsbyclassname

// console.dir(heading);

// document.getElementById("demo").innerHTML = "Hello World!";
// document.getElementById("demo").style.setProperty('color' , 'blue');

// dom manipulation

// practice question 1

// let h2=document.querySelector("h2");
// console.log(h2);

// h2.innerText=h2.innerText+"  From Apna College";  // concatenate

// practice question 2
 let divs=document.querySelectorAll(".box");
//  console.log(divs[0]);
let i=0
 for(div of divs)
 {
    div.innerText=`This is box ${i+1}`;
    i++;
 }

//  divs[0].innerText="This is Box One."; 
//  divs[1].innerText="This is Box Two."; 
//  divs[2].innerText="This is Box Three.";   
//  divs[0].innerHTML="<button>clickme</button> <p>This is box three</p>"; 

