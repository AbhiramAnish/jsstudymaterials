// events in js // inline handling means in html file itself



// btn1.onclick=()=>{
//     console.log("Btn was clicked");
// }

let box=document.querySelector("div");

// box.onmouseover=()=>{
//     console.log("I entered the div");
//     box.style.backgroundColor="red"
// }

// event listners

// btn1.addEventListener("click",()=>{
//     console.log("Btn was clicked -- handler1");
// })

// btn1.addEventListener("click",()=>{
//     console.log("Btn was clicked -- handler2");
// })

// let handler3=()=>{
//     console.log("Btn was clicked -- handler3");
// }

// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click",()=>{
//     console.log("Btn was clicked -- handler4");
// })

// btn1.removeEventListener("click",handler3) // passed a variable because memory is not same for same function
//practice question 1
// let btn1=document.querySelector("#btn1");

// let mode="Light";
// btn1.addEventListener("click",()=>{
//     console.log("You clicked a button!");
//     if(mode==="Light"){
//         mode="Dark";
//         document.querySelector("body").style.backgroundColor="grey";
//     }else{
//         mode="Light";                                                    //using js only
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(mode);
// })

let btn1=document.querySelector("#btn1");

let mode="Light";
btn1.addEventListener("click",()=>{
    console.log("You clicked a button!");
    if(mode==="Light"){
        mode="Dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }else{                                                              //using css
        mode="Light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(mode);
})