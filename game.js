
let Allbtn=document.querySelectorAll(".btn");
let resetbtn= document.querySelector("#reset");
let messageconatiner=document.querySelector(".message-container")
let newbtn=document.querySelector("#newgame")
let win=document.querySelector("#winner")

// here we have two players for playing r game
// player X
// player O
 let turno= true; // this is for fixing turns

 // here some pattern to win the game
 const Winnerpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];
 const reset=()=>{
    turno=true;
    Unabledbox();
    messageconatiner.classList.add("hide");

 };

 Allbtn.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            console.log("Button was clicked");
            //we check if turno is true than first turn is  playerO
            if(turno){
                btn.innerHTML="O";
                turno=false;
            }else{
                btn.innerHTML="X";
                turno=true;
            }
              btn.disabled=true;
              Winner()
            });
        });

        // for disabled other box if any one win the game
        const Disabledbox=()=>{
            for(let btn of Allbtn ){
                btn.disabled=true;
            }
        }
        const Unabledbox=()=>{
            for(let btn of Allbtn ){
                btn.disabled=false;
                btn.innerHTML="";
            }
        }
       // new function creating for display winner
const Showwinner=(Winner)=>{
    win.innerHTML=`congratulations, Winner is${Winner}`;
    messageconatiner.classList.remove("hide");
    Disabledbox();       
}

// this function is for check patterns and boxes containg wich one x or o
         const Winner=()=>{
              for(let pattern of Winnerpatterns){
    
               // here this is for check patterns on box indexes
               let position1=Allbtn[pattern[0]].innerText;
               let position2=Allbtn[pattern[1]].innerText;
               let position3=Allbtn[pattern[2]].innerText;
               if(position1!=""&& position2!=""&& position3!=""){
               if(position1===position2 && position2===position3){
               Showwinner(position1);
               }
            }
        };

        }
        newbtn.addEventListener("click",reset);
        resetbtn.addEventListener("click",reset);