let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    player.chips -= 25;
    if (player.chips >= 0) {
        isAlive = true
        hasBlackJack = false;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard

        playerEl.textContent = player.name + ": $" + player.chips
        renderGame()
    } else {
        messageEl.textContent = "You do not have enough chips."
    }

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false && player.chips >= 0) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else if (isAlive === false || hasBlackJack === true || player.chips == 0) {
        messageEl.textContent = "You cannot draw a new card."
    }
}

function resetGame() {
    messageEl.textContent = "Want to play a round?"
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    player.chips = 200;
    isAlive = true;
    hasBlackJack = false;
    playerEl.textContent = player.name + ": $" + player.chips

}
