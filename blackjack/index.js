let player ={
    Name :"Abishek",
    Chips :145
}


let cards =[ ];
let sum = 0;
let hasBlackjack =false ;
let isAlive =false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEL =document.getElementById("sum-el");
let cardEL =document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent =player.Name+ ":$"+ player.Chips;


console.log(cards);
function getRandomCard(){
    let randomNumber =Math.floor(Math.random()*13) +1  ;
     if(randomNumber>10){
        return 10;
     }else if(randomNumber===1){
        return 11;
     }
     else {
        return randomNumber ;
     }
       
}

function startGame(){
    isAlive =true;
    let firstCard =getRandomCard();
    let secondCard =getRandomCard();
    cards=[ firstCard , secondCard];
    sum=firstCard +secondCard;
    renderGame();
}
function renderGame(){
     cardEL.textContent = "CARDS:"  ;

     for (let i=0;i<cards.length;i++){
        cardEL.textContent += cards[i] + " ";
     }
     sumEL.textContent = "SUM:" + sum;

    if (sum<=20){
        message="Do yo want to draw a new card ";
    }
    else if (sum ===21){
        message="You got  a Blackjack!";
        hasBlackjack =true;
    }
    else {
        message="you're out of the game "
        isAlive =false;
    }
    messageEl.textContent =message;
   
}
function newcard(){
     if(isAlive === true && hasBlackjack === false){
        let card =getRandomCard();
     
        sum +=card;
        cards.push(card);
        
       renderGame();

     }
    
}

