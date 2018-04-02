/*
 * Create a list that holds all of your cards;
 * This will be used to shuffle the deck.
 * The produced list will have an index for each card.
 * The shuffle function will assign new index values
 */

const repeatButton = document.getElementById('restart');


let allCards = document.getElementsByClassName('card');
let theDeck = document.getElementById('the-deck');


repeatButton.addEventListener('click', function (){
    /*
    @description Event listenner to shuffle the deck;
                Calls the shuffle function on the htmlcollection of
                cards which redefines every cards index;
                The loop appends each card to the deck;
    */
    let allCards2 = shuffle(allCards);
    for(let i = 0; i < allCards2.length; i ++) {
        theDeck.appendChild(allCards2[i]);
    }
})


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    /*
    @description Gets the array and shuffles its element indices
    */
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*
 * Event listeners for the cards
*/
let show = false;
let card1, card1_classes, card2, card2_classes;

theDeck.addEventListener('click', function (event) {
    /*
     * Gets the card element clicked (the target)
     * toggles "show" and "open" classes on that element
    */
    event.target.classList.toggle('open');
    event.target.classList.toggle('show');
    console.log(event.target);

    if (card1 == undefined) {
        // get the first card info (class name)
        card1 = event.target;
        card1_classes = event.target.children[0].className;
    } else {
        /* get the second card info if the first exists
         * call the comparison function
        */
        card2 = event.target;
        card2_classes = event.target.children[0].className;
        comparator(card1_classes, card2_classes);
    };
})

function comparator(firstCard, secondCard) {
    if (firstCard == secondCard) {
        card1.classList.toggle('match');
        card2.classList.toggle('match');
    } else {
        card1.classList.remove('open', 'show');
        card2.classList.remove('open', 'show');
    };
    card1 = undefined;
    card2 = undefined;
}