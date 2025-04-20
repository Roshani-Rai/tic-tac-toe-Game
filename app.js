let boxes=document.querySelectorAll(".box");
let mesline=document.querySelector("#msg");
let newgame=document.querySelector("#new-game");
let resetgame=document.querySelector("#reset-game");
let message=document.querySelector(".msg-container");
let turnO=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const reset=() =>{
    turnO =true;
    enablebox();
 message.classList.add("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
       box.disabled=true;
        checkwinner();
       
    });
});
const disablebox=() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enablebox=() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=" ";
    }
};
const showWinner=(winner) =>{
    mesline.innerText=`Congratulations , Winner is ${winner}`;
    console.log("congratulations")
    message.classList.remove("hide");
    newgame.innerText="New Game";
    disablebox();
};

const checkwinner=()=>{
    for(let pattern of winpattern){
        let posF=boxes[pattern[0]].innerText;
        let posS=boxes[pattern[1]].innerText;
        let posT=boxes[pattern[2]].innerText;
        if(posF !="" && posS !="" && posT !=""){
        if(posF===posS && posS===posT) {
        showWinner(posF);
    }
}
}
};
newgame.addEventListener("click",reset);
resetgame.addEventListener("click",reset);