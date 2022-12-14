
let allCards = [];
let sum = 0;

let hasBlackJack = false
let isAlive = false;
let message = " "

//1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

//Store the sum paragraph in variable called sumEl
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
// console.log(messageEl);

//Store the cards paragraph in a variable called cardEl
let cardEl = document.getElementById("cards-el")

//Instead of having two variables, combine it into single unity. Or we call Object with Key : value
// let playerName ="Michael"
// let playerChips = 145
let player ={
    name:"Michael",
    chips:145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips




//Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {

    //For simplicity of BlackJack rule, if 1 -> return 11; if 11-13, return 10


    // let randomCard = Math.floor(Math.random()*13+1)
    let randomCard = Math.ceil(Math.random() * 13)
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard
    }

}

//Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true

    //Use getRandomCard() to set values of firstCard and secondCard
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    allCards = [firstCard, secondCard] //array - ordered list of item

    sum = firstCard + secondCard


    renderGame()
}


function renderGame() {

    //3. Render the sum on the page using this format --> "Sum:14"
    sumEl.textContent = "Sum: " + sum;

    //Render the cards on the page using this for format --> "Cards: 10 4"
    //this only render out the firstCard and secondCard
    // cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    // cardEl.textContent="Cards: " + cards[0] + " " + cards[1]
    cardEl.textContent = "Cards: "


    //Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < allCards.length; i++) {
        cardEl.textContent += allCards[i] + " "
    }

    //we want to render out all the card

    if (sum <= 20) {
        // console.log("Do you want to draw a new card?");
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        // console.log("you got blackjack");
        message = "You got blackjack!"

        hasBlackJack = true;

    } else {
        // console.log("You are out");
        message = "You are out!"

        isAlive = false
    }

    //2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
    // console.log(message);
}

function newCard() {
  
    //Only allow the player to get a new card if she IS alive and does Not have Blackjack 
    if (isAlive ===true && hasBlackJack===false){

        //Create a card variable, and hard code its value to a number (2-11)
        let card = getRandomCard()
    
        //Add the new card to the sum variable 
        sum += card
    
        //Push the card to the allCards array
        allCards.push(card)
        // console.log(allCards);
    
        renderGame()
    }

    


}