let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let msgcontainer = document.querySelector('.msgcontainer');
let msg=document.querySelector('.msg');
let playagain=document.querySelector('.playagain');
let turno=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText='X';
            box.style.color='red';
            turno=false;
        }else{
            box.innerText='O';
            box.style.color='green';
            turno=true;
        }
        box.disabled = true;
        count++;
        checkWin();
        if(count===9){
            msg.innerText = "Match Draw !!";
            playagain.innerText = "Play Again";
            msgcontainer.classList.remove("hide");
        }
    });
});
const showWin = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner} !!`;
    playagain.innerText = "Play Again";
    msgcontainer.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled = true;
    });
};
const checkWin = () =>{
    winpattern.forEach((pattern)=>{
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                showWin(posval1);
            }
        }
    });
};
playagain.addEventListener("click",()=>{
    count=0;
    turno=true;
    msgcontainer.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
});
reset.addEventListener("click",()=>{
    count=0;
    turno=true;
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
});
