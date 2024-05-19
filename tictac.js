let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winnermsg=document.querySelector("h1");
let flag =true;
let turnO = true;

// 2d arrays

// let arr1=[[1,2,3],[4,5,6],7,8,9];
const Winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
        if(checkdraw()){
            winnermsg.style.visibility="visible";
                winnermsg.innerText=`Its a Draw!!!`;
        }
    });
});
const checkdraw=()=>{
    for(box of boxes){
        if(box.innerText==""){
            return false;
        }
    }
    return true;
}

const checkwinner=()=>{
    for( patterns of Winpattern){
        // console.log(patterns);
        // console.log(patterns[0],patterns[1],patterns[2]);      //for refering
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        // if(boxes[patterns[0]].innerText == 'X' &&
        //     boxes[patterns[1]].innerText=='X'   &&
        //     boxes[patterns[2]].innerText==='X'){
        //         console.log('Player 1(X) wins');
        // }
        // else if (boxes[patterns[0]].innerText === 'O' && 
        //     boxes[patterns[1]].innerText === 'O' && 
        //     boxes[patterns[2]].innerText === 'O') {
        //     console.log('Player2(O) wins');

        // }
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log(`winner is ${pos1val}`);
                winnermsg.style.visibility="visible";
                winnermsg.innerText=`Winner is ${pos1val}`;
                flag=false;
                for(box of boxes){
                    box.disabled = true;
                }
                return;
            }
        }
        
    }
}


reset.addEventListener('click',()=>{
    boxes.forEach((box) => {
                box.innerText="";
                box.disabled=false;
                winnermsg.style.visibility="hidden";
    });
})