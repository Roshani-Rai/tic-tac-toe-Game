let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".container-large");
let mesline=document.querySelector("#msg");
let newgame=document.querySelector("#new-game");
let resetgame=document.querySelector("#reset-game");
let message=document.querySelector(".msg-container");
let playGame1=document.querySelector(".Game1");
let playGame2=document.querySelector(".Game2");
let last=document.querySelector(".play");
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


 let Game1=false;
 let Game2=false;


const generateComputer=(n)=>{
    let array=[0,1,2,3,4,5,6,7,8];
   let index=array.indexOf(n);
    array.splice(index,1);
    let random=Math.floor(Math.random()*array.length);
      return array[random];   
}


const reset=() =>{
    turnO =true;
    enablebox();
 message.classList.add("hide");
};


  playGame1.addEventListener('click',()=>{
       Game1=true;
       message.classList.add("hide");
       last.classList.add("hide");
       container.classList.remove("hide");
        turnO =true;
      enablebox();
 });


 playGame2.addEventListener('click',()=>{
      Game2=true;
       message.classList.add("hide");
        last.classList.add("hide");
        container.classList.remove("hide");
         turnO =true;
         enablebox();
 });


   boxes.forEach((box) =>{
   box.addEventListener("click", () =>{
   let nums= box.getAttribute("id");
  //console.log(typeof(nums));
   if(Game1){
     if(turnO){
            box.innerText="O";
            turnO=false;
             //let ind=generateComputer(nums);
             //const str = ind.toString();
             // console.log(typeof(str));
             //  console.log(str);
              let element=document.getElementById("generateComputer(nums)");
              console.log(element);
              element.innerText="X";
              turnO=true;
        }
   }
   else if(Game2){
      if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
             box.innerText="X";
            turnO = true;
        }
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
    container.classList.add("hide");
   last.classList.add("hide");
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


newgame.addEventListener("click",()=>{
     message.classList.add("hide");
 container.classList.add("hide");
});


resetgame.addEventListener("click",reset);