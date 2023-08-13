let random= Math.trunc(Math.random()*20) +1 ;

console.log("random",random);

let guessElement=document.getElementById("guess-input");

console.log("guessElement",guessElement);


let checkButton=document.getElementById("check-button");

let messageElement=document.querySelector(".message");

let highscoreElement =document.querySelector(".highscore");
let scoreElement =document.querySelector(".score");

let againButtonElement=document.querySelector(".again");
let score =20;
let numberElement=document.querySelector(".number");

function check(){
    console.log("check button click");

    let value=guessElement.value;
    console.log("value",value);

   
    if(value == random){
        console.log("value match");
        document.querySelector("body").style.backgroundColor="green";
        messageElement.textContent="correct answer";
        highscoreElement.textContent=score;
        numberElement.textContent=random;

    }

    else if(value<random){
        messageElement.textContent="too low";
        score= score - 1;
        scoreElement.textContent=score;
    }
    else if(value> random){
        messageElement.textContent="too high";
        score = score -1;
        scoreElement.textContent=score;
    }
}

function reset() {
    messageElement.textContent="Start guessing ......";
    scoreElement.textContent=20;
    highscoreElement.textContent=0;
    document.querySelector("body").style.backgroundColor="#222";
    numberElement.textContent="?";
    guessElement.value="";

}

checkButton.addEventListener("click",check);
againButtonElement.addEventListener("click",reset);

//document.createelement