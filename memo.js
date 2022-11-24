const cardArray = [
    {
        name: "red-fish",
        img: "images/1.png"
    },
    {
        name: "starfish",
        img: "images/2.png"
    },
    {
        name: "turtle",
        img: "images/3.png"
    },
    {
        name: "blue-fish",
        img: "images/4.png"
    },
    {
        name: "jellyfish",
        img: "images/7.png"
    },
    {
        name: "pink-fish",
        img: "images/10.png"
    },
    {
        name: "red-fish",
        img: "images/1.png"
    },
    {
        name: "starfish",
        img: "images/2.png"
    },
    {
        name: "turtle",
        img: "images/3.png"
    },
    {
        name: "blue-fish",
        img: "images/4.png"
    },
    {
        name: "jellyfish",
        img: "images/7.png"
    },
    {
        name: "pink-fish",
        img: "images/10.png"
    }
];

cardArray.sort( () => 0.5 - Math.random() );

const grid = document.querySelector("#grid");
const score = document.querySelector("#score");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createMemoBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const memoCard = document.createElement("img");
        memoCard.setAttribute("src" , "images/13.png");
        memoCard.setAttribute("data-id", i);
        memoCard.addEventListener("click", flipCard);
        grid.appendChild(memoCard);
    }
}

createMemoBoard();

function checkMatch () {
    const cards = document.querySelectorAll("img");

    if(cardsChosenId[0] == cardsChosenId[1]) {
        alert("You have clicked the same image!")
        cards[cardsChosenId[0]].setAttribute("src" , "images/13.png");
        cards[cardsChosenId[1]].setAttribute("src" , "images/13.png");
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!");
        cards[cardsChosenId[0]].setAttribute("src" , "images/14.png");
        cards[cardsChosenId[1]].setAttribute("src" , "images/14.png");
        cards[cardsChosenId[0]].removeEventListener("click", flipCard);
        cards[cardsChosenId[1]].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenId[0]].setAttribute("src" , "images/13.png");
        cards[cardsChosenId[1]].setAttribute("src" , "images/13.png");


    }

    score.innerHTML = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];

    if( cardsWon.length == cardArray.length/2 ) {
        score.innerHTML = `Congratulations`
    }
}

function flipCard () {
    const memoCardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[memoCardId].name);
    cardsChosenId.push(memoCardId);
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute("src", cardArray[memoCardId].img )
    if ( cardsChosen.length === 2 ) {
        setTimeout(checkMatch, 1000);
    }
}