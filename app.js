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


 let turnO=true;
 let Game1=false;
 let Game2=false;
 let winnerFound;
 
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


 let array=[0,1,2,3,4,5,6,7,8];


 const generateArray=(n)=>{
   let index=array.indexOf(n);
   array.splice(index,1);
   return array;
}


 const reset=() =>{
   winnerFound=false;  
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
             box.style.color="rgb(170, 27, 123)";
              box.disabled=true;
              turnO=false;
              setTimeout(()=>{
               checkwinner();
               if(winnerFound===false && array.length>0){
                // box.getAttribute("id")---> Give string
               let number=Number(nums)
                array=generateArray(number);
               let ind=array[Math.floor(Math.random()*array.length)];
               let str = ind.toString();
               let element=document.getElementById(str);
               setTimeout(()=>{
               element.innerText="X";
               element.style.color="rgb(19, 127, 16)";
               element.disabled=true;
               array=generateArray(ind);
               turnO=true; 
               },100);
               setTimeout(checkwinner,400);
               }
              },400);
            }
          }
               //remember if checkwinner is not in setout
               //  then cause issue because checkwinner called before
                //  computer move hence disable and generate 
               // must be placed outside but can say only may be approved.
               
             else if(Game2){
               let number=Number(nums)
               array=generateArray(number);
               if(turnO){
               box.innerText="O";
               box.style.color="rgb(170, 27, 123)";
               turnO=false;
               }
               else{
               box.innerText="X";
               box.style.color="rgb(19, 127, 16)";
               turnO = true;
               }
               box.disabled=true;
               setTimeout(checkwinner,300);
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
       setTimeout(()=>{
        winSound.pause();
        winSound.currTime=0;
       },9000);
    if(winner==="O" && Game1===true){
     mesline.innerText=`Congratulations ! You won the match , Winner is ${winner}`;
     mesline.style.backgroundColor="rgb(19, 127, 16)";
    }
    else if(winner==="X" && Game1===true){
       mesline.innerText=`Oops ! You lose the match , Winner is ${winner}`;
     mesline.style.backgroundColor="rgb(227, 10, 13)";
    }
    else {
      if(winner==="O"){
        mesline.innerText=`Congratulations ! Player1 won the match , Winner is ${winner}`;
         mesline.style.backgroundColor="green";
      }
      else{
     mesline.innerText=`Congratulations ! Player2 won the match , Winner is ${winner}`;
     mesline.style.backgroundColor="green";
    }
  }
      message.classList.remove("hide");
     container.classList.add("hide");
      last.classList.add("hide");
      newgame.innerText="New Game";
       disablebox();
};


const checkwinner=()=>{
     winnerFound=false;             //
    for(let pattern of winpattern){
        let posF=boxes[pattern[0]].innerText;
        let posS=boxes[pattern[1]].innerText;
        let posT=boxes[pattern[2]].innerText;
        if(posF !="" && posS !="" && posT !=""){
        if(posF===posS && posS===posT) {
        winnerFound=true;                         //
        showWinner(posF);
        break;                                  //return;
    }
  }
}
   if(array.length===0 && !winnerFound){        // if(array.length===0 )
        backgroungMusic.pause();
        winnerFound=true;
         winSound.play();
       setTimeout(()=>{
        winSound.pause();
        winSound.currTime=0;
       },9000);
        mesline.innerText=`Ooh! Game was draw! Try Again`;
        mesline.style.backgroundColor="rgb(139, 137, 137)";
            message.classList.remove("hide");
            container.classList.add("hide");
            last.classList.add("hide");
            newgame.innerText="New Game";
            disablebox();
    }
};

const Newgame=()=>{
        winnerFound=false;  
     message.classList.add("hide");
     container.classList.add("hide");
     array=[0,1,2,3,4,5,6,7,8];
      buttonClick.play();
      setTimeout(() => {
        buttonClick.pause();           
       buttonClick.currentTime = 0;  
        }, 1000);
        backgroungMusic.pause();
        backgroungMusic.currTime=0;
        backgroungMusic.play();
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
const bubbleContainer = document.querySelector(".bubbles");

  function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Randomize size and position
    const size = Math.random() * 20 + 10; // 10px - 30px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10 seconds

    bubbleContainer.appendChild(bubble);

    //Remove bubble after it floats up
   setTimeout(() => {
     bubble.remove();
    }, 10000);
  }

  // Create a new bubble every 200ms
  setInterval(createBubble, 100);

newgame.addEventListener("click",Newgame);
extra.addEventListener("click",Newgame);
resetgame.addEventListener("click",reset);