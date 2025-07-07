let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".container-large");
let mesline=document.querySelector("#msg");
let newgame=document.querySelector("#new-game");
let resetgame=document.querySelector("#reset-game");
let message=document.querySelector(".msg-container");
let playGame1=document.querySelector(".Game1");
let playGame2=document.querySelector(".Game2");
let last=document.querySelector(".play");
let extra=document.querySelector("#extra");
let backgroungMusic=document.querySelector("#bg-music");
let MouseMusic=document.querySelector("#mouse-click");
let buttonClick=document.querySelector("#button-click");
let winSound=document.querySelector("#win");

console.log(winSound)
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


let array=[0,1,2,3,4,5,6,7,8];


const generateArray=(n)=>{
   let index=array.indexOf(n);
   array.splice(index,1);
   return array;
}


const reset=() =>{
    turnO =true;
    enablebox();
    array=[0,1,2,3,4,5,6,7,8];
    message.classList.add("hide");
    buttonClick.play();
      setTimeout(() => {
        buttonClick.pause();            // Pause after 3 seconds
         buttonClick.currentTime = 0;    // Reset to beginning (optional)
          }, 1000);
     backgroungMusic.pause();
     backgroungMusic.currentTime=0;
     backgroungMusic.play();
};


  playGame1.addEventListener('click',()=>{
    buttonClick.play();
      setTimeout(() => {
        buttonClick.pause();            // Pause after 3 seconds
         buttonClick.currentTime = 0;    // Reset to beginning (optional)
          }, 1000);
     backgroungMusic.pause();
     backgroungMusic.currentTime=0;
     backgroungMusic.play();
       Game1=true;
       message.classList.add("hide");
       last.classList.add("hide");
       container.classList.remove("hide");
        turnO =true;
      enablebox();
 });


 playGame2.addEventListener('click',()=>{
    buttonClick.play();
      setTimeout(() => {
        buttonClick.pause();            // Pause after 3 seconds
         buttonClick.currentTime = 0;    // Reset to beginning (optional)
          }, 1000);
     backgroungMusic.pause();
     backgroungMusic.currentTime=0;
     backgroungMusic.play();
     Game1=false;
      Game2=true;
       message.classList.add("hide");
        last.classList.add("hide");
        container.classList.remove("hide");
         turnO =true;
         enablebox();
 });


   boxes.forEach((box) =>{
   
   box.addEventListener("click", () =>{
      MouseMusic.play();
      setTimeout(() => {
        MouseMusic.pause();            // Pause after 3 seconds
         MouseMusic.currentTime = 0;    // Reset to beginning (optional)
          }, 500);
            let nums= box.getAttribute("id");
            if(Game1){
            if(turnO){
             box.innerText="O";
             turnO=false;
              // box.getAttribute("id")---> Give string
                  let number=Number(nums)
             array=generateArray(number);
             let ind=array[Math.floor(Math.random()*array.length)];
             const str = ind.toString();
              let element=document.getElementById(str);
               element.innerText="X";
               element.disabled=true;
               checkwinner();
                turnO=true;
               array=generateArray(ind);
             }
               box.disabled=true;
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
              box.disabled=true;
              checkwinner();
   }
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
    backgroungMusic.pause();
    winSound.play();
       mesline.innerText=`Congratulations , Winner is ${winner}`;
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
    else if(array.length===0){
        backgroungMusic.pause();
        buttonClick.play();
        mesline.innerText=`Ooh! Game was draw! Try Again`;
            message.classList.remove("hide");
            container.classList.add("hide");
            last.classList.add("hide");
            newgame.innerText="New Game";
            disablebox();
    }
}
}
};

const Newgame=()=>{
     message.classList.add("hide");
     container.classList.add("hide");
     array=[0,1,2,3,4,5,6,7,8];
      buttonClick.play();
      setTimeout(() => {
        buttonClick.pause();           
       buttonClick.currentTime = 0;  
        }, 1000);
        if(backgroungMusic.play()){
           backgroungMusic.pause();
        backgroungMusic.currentTime=0;  
        }
        if(winSound.play()){
         winSound.pause();
        winSound.currentTime=0;
        }
       
}

/*const stop=()=>{
    winSound.pause();
    winSound.currentTime=0;
    backgroungMusic.pause();
    backgroungMusic.currentTime=0;
    MouseMusic.pause();
    MouseMusic.currentTime=0;
    buttonClick.pause();
    buttonClick.currentTime=0;
}*/


newgame.addEventListener("click",Newgame);
extra.addEventListener("click",Newgame);
resetgame.addEventListener("click",reset);