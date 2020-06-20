const cardArray = document.querySelectorAll('.flip-box');

//remove display of backface

let cardChosen = false;
let firstCard, secondCard;


let counter = document.querySelector('.moves');
let moves = 0

let pointsCount = document.querySelector('.points');
let points = 0;


function showCard(){
   this.classList.add('show');

    if(!cardChosen){
        cardChosen = true;
        firstCard = this;
        return;
    }
    else{
        cardChosen = false;
        secondCard = this;

        checkMatch();
        moveCounter();
}

}


function moveCounter(){
    moves++;
    counter.innerHTML = moves;
}

function PointsCounter(){
    points++;
    pointsCount.innerHTML = points;
}


function checkMatch(){

    //check if cards matchcards match 
    if(firstCard.title === secondCard.title){
        firstCard.removeEventListener('click',showCard);
        secondCard.removeEventListener('click',showCard);
        console.log('Function was executed');

        PointsCounter();

    }
    //check if no match
    else{
        setTimeout(() => {
        firstCard.classList.remove("show");
        secondCard.classList.remove("show");
        },1000);

       console.log("no match");
    }


    }


cardArray.forEach (card => card.addEventListener('click',showCard))