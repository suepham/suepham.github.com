const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const name1 = document.getElementById("playerone");
const name2 = document.getElementById("playertwo");
const playerone = document.getElementById("player1");
const playertwo = document.getElementById("player2");
const player1name = document.getElementById("player1").value;
const player2name = document.getElementById("player2").value;
const turn = document.querySelector("h5");
const playAgain = document.querySelector("h6");
const gameRules = document.querySelector("h3");
const rulesTitle = document.getElementsByClassName("rule");
let mainCard = document.getElementById("maincard");
const changeName1 = document.getElementById("player1name");
const changeName2 = document.getElementById("player2name");
const deck1 = document.getElementById("cardsleft");
const deck2 = document.getElementById("cardsright");
const btnMain = document.getElementById("btnmain");
const scoreOne = document.getElementById("score1");
const scoreTwo = document.getElementById("score2");

let oneCard1 = document.getElementById("player1card1");
let oneCard2 = document.getElementById("player1card2");
let oneCard3 = document.getElementById("player1card3");
let oneCard4 = document.getElementById("player1card4");
let oneCard5 = document.getElementById("player1card5");

let twoCard1 = document.getElementById("player2card1");
let twoCard2 = document.getElementById("player2card2");
let twoCard3 = document.getElementById("player2card3");
let twoCard4 = document.getElementById("player2card4");
let twoCard5 = document.getElementById("player2card5");

let x = 15;
let y = 35;
let randPlay;
let randMain;
const usedNums = [];
const mainNums = [];

const gameData = {
    mainCards: ["maincard1.svg", "maincard2.svg", "maincard3.svg", "maincard4.svg", "maincard5.svg", "maincard6.svg", "maincard7.svg", "maincard8.svg", "maincard9.svg", "maincard10.svg", "maincard11.svg", "maincard12.svg", "maincard13.svg", "maincard14.svg", "maincard15.svg"],
    playerCards: ["playercard1.svg", "playercard2.svg", "playercard3.svg", "playercard4.svg", "playercard5.svg", "playercard6.svg", "playercard7.svg", "playercard8.svg", "playercard9.svg", "playercard10.svg", "playercard11.svg", "playercard12.svg", "playercard13.svg", "playercard14.svg", "playercard15.svg", "playercard16.svg", "playercard17.svg", "playercard18.svg", "playercard19.svg", "playercard20.svg", "playercard21.svg", "playercard22.svg", "playercard23.svg", "playercard24.svg", "playercard25.svg", "playercard26.svg", "playercard27.svg", "playercard28.svg", "playercard29.svg", "playercard30.svg", "playercard31.svg", "playercard32.svg", "playercard33.svg", "playercard34.svg", "playercard35.svg", ],
    player1Cards: [],
    player2Cards: [],
    players: [],
    score: [0, 0],
    index: 0,
    win: 0,
    gameEnd: 4
};

//when join buttons on startup screen are clicked
//player one
btn1.addEventListener("click", function(event){
    event.preventDefault();

    const player1name = document.getElementById("player1").value;

    //if no name is inputted, set name to "player 1"
    if (player1name != "") {
        gameData.players.push(`${player1name}`);
        name1.innerHTML = `Welcome, ${player1name}`;
    }
    else {
        gameData.players.push(`Player 1`);
        name1.innerHTML = `Welcome, Player 1`;
    }

    btn1.style.display = "none";
    playerone.style.display = "none";

    //player two
    btn2.addEventListener("click", function(event){
        event.preventDefault();
    
        const player2name = document.getElementById("player2").value;
    
        //if no name is inputted, set name to "player 2"
        if (player2name != "") {
            gameData.players.push(`${player2name}`);
            name2.innerHTML = `Welcome, ${player2name}`;
        }
        else {
            gameData.players.push(`Player 2`);
            name2.innerHTML = `Welcome, Player 2`;
        }
    
        btn2.style.display = "none";
        playertwo.style.display = "none";
    
        //when both players join, run startup function
        setTimeout(function(){ startUp();}, 1000);
    });
});

//startup removes the design of starting screen
function startUp() {
    const title = document.querySelector("h1");
    const div = document.querySelector("div");
    title.classList.add("newTitle");
    playerone.style.display = "none";
    playertwo.style.display = "none";
    player1.style.display = "none";
    player2.style.display = "none";
    div.classList.add("divRemove");
    setTimeout(function(){ rules();}, 1000);
}

//sets the design of the rules page and displays the rules
function rules() {
    deck1.style.display = "inline-flex";
    deck2.style.display = "inline-flex";
    gameRules.style.display = "block";
    rulesTitle[0].style.display = "block";
    mainCard.style.display = "block";
    btnMain.style.display = "block";
    changeName1.innerHTML = `${gameData.players[0]}`;
    changeName2.innerHTML = `${gameData.players[1]}`;

    //when start game button clicked, begin game
    btnMain.addEventListener("click", function(e){
        e.preventDefault();
        startGame();
    });
}

//sets up the design page of the game
function startGame() {
    gameRules.style.display = "none";
    rulesTitle[0].style.display = "none";
    btnMain.style.display = "none";
    deck1.style.paddingTop = "8%";
    deck2.style.paddingTop = "8%";
    scoreOne.style.display = "inline";
    scoreTwo.style.display = "inline";

    showCurrentScore();

    //generate random number between 0 and 1 
    gameData.index = Math.round(Math.random());
    console.log(`${gameData.index}`);
    setUpTurn();
}

//determines which player will start first based on the random number generator
function setUpTurn(){
    setMainCard();
    turn.style.display = "block";
    if (gameData.index == 0) {
        turn.innerHTML = `${gameData.players[0]}'s turn`;
        setTimeout(function(){player1Initial();}, 2000);
        deck2.style.display = "none";
    }
    else {
        deck2.style.float = "left";
        turn.innerHTML = `${gameData.players[1]}'s turn`;
        setTimeout(function(){player2Initial();}, 2000);
        deck1.style.display = "none";
    }
}

//sets the main play card
function setMainCard(){
    randMain = [Math.floor(Math.random() * x)];
    mainNums.push(randMain);
    mainCard.src = `images/${gameData.mainCards[randMain]}`;
}

//generates a random number to select random cards for the players
function setPlayerCard() {
    randPlay = [Math.floor(Math.random() * y)];
    usedNums.push(randPlay);
    return randPlay;
}

/*********************** first round functions **********************/

//if player one is chosen to go first
function player1Initial() {
    deck1.id = "cardsleftnew";

    //sets the cards in the players hand
    setPlayerCard();
    oneCard1.src = `images/${gameData.playerCards[randPlay]}`;
    
    setPlayerCard();
    oneCard2.src = `images/${gameData.playerCards[randPlay]}`;
    
    setPlayerCard();
    oneCard3.src = `images/${gameData.playerCards[randPlay]}`;
    
    setPlayerCard();
    oneCard4.src = `images/${gameData.playerCards[randPlay]}`;
        
    setPlayerCard();
    oneCard5.src = `images/${gameData.playerCards[randPlay]}`;
    
    //if card is selected by user, replace the card with a new one and move to next player
    oneCard1.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard1.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        setTimeout(function(){player2Turn2();}, 2000);
    });
    oneCard2.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard2.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        setTimeout(function(){player2Turn2();}, 2000);
    });
    oneCard3.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard3.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        setTimeout(function(){player2Turn2();}, 2000);
    });
    oneCard4.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard4.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        setTimeout(function(){player2Turn2();}, 2000);
    });
    oneCard5.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard5.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        setTimeout(function(){player2Turn2();}, 2000);
    });
}

//if player two is chosen to go first
function player2Initial() {
    deck2.id = "cardsrightnew";

    //sets the cards in the players hand
    setPlayerCard();
    twoCard1.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard2.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard3.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard4.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard5.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    //if card is selected by user, replace the card with a new one and move to next player
    twoCard1.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard1.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        setTimeout(function(){player1Turn2();}, 2000);
    });
    twoCard2.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard2.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        setTimeout(function(){player1Turn2();}, 2000);
    });
    twoCard3.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard3.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        setTimeout(function(){player1Turn2();}, 2000);
    });
    twoCard4.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard4.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        setTimeout(function(){player1Turn2();}, 2000);
    });
    twoCard5.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard5.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        setTimeout(function(){player1Turn2();}, 2000);
    });
}

//if player two was chosen to go first, this function will run
function player1Turn2(){
    deck1.style.display = "inline-flex";
    deck1.id = "cardsleftnew";

    //sets up the cards in the player's hand
    setPlayerCard();
    oneCard1.src = `images/${gameData.playerCards[randPlay]}`;
    
    setPlayerCard();
    oneCard2.src = `images/${gameData.playerCards[randPlay]}`;
    
    setPlayerCard();
    oneCard3.src = `images/${gameData.playerCards[randPlay]}`;
    
    setPlayerCard();
    oneCard4.src = `images/${gameData.playerCards[randPlay]}`;
        
    setPlayerCard();
    oneCard5.src = `images/${gameData.playerCards[randPlay]}`;
    
    //if user clicks on the card, replace the card with a new one
    //once player one has chosen their card, the winner will be selected 
    oneCard1.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard1.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        selWinner();
    });
    oneCard2.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard2.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        selWinner();
    });
    oneCard3.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard3.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        selWinner();
    });
    oneCard4.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard4.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        selWinner();
    });
    oneCard5.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard5.src = `images/${gameData.playerCards[randPlay]}`;

        deck2.id = "cardsrightnew";
        deck1.style.display = "none";
        deck1.id = "cardsleft";
        selWinner();
    });
}

//if player one was chosen to go first, this function will run
function player2Turn2(){
    deck2.style.display = "inline-flex";
    deck2.id = "cardsrightnew";

    //sets up the cards in the player's hand
    setPlayerCard();
    twoCard1.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard2.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard3.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard4.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    setPlayerCard();
    twoCard5.src = `images/${gameData.playerCards[randPlay]}`;
    gameData.player2Cards.push(`images/${gameData.playerCards[randPlay]}`);

    //if user clicks on the card, replace the card with a new one
    //once player one has chosen their card, the winner will be selected 
    twoCard1.addEventListener("click", function(e){
        e.preventDefault();
        setPlayerCard();
        twoCard1.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        selWinner();
    });
    twoCard2.addEventListener("click", function(e){
        e.preventDefault();
        setPlayerCard();
        twoCard2.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        selWinner();
    });
    twoCard3.addEventListener("click", function(e){
        e.preventDefault();
        setPlayerCard();
        twoCard3.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        selWinner();
    });
    twoCard4.addEventListener("click", function(e){
        e.preventDefault();
        setPlayerCard();
        twoCard4.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        selWinner();
    });
    twoCard5.addEventListener("click", function(e){
        e.preventDefault();
        setPlayerCard();
        twoCard5.src = `images/${gameData.playerCards[randPlay]}`;

        deck1.id = "cardsleftnew";
        deck2.style.display = "none";
        deck2.id = "cardsright";
        selWinner();
    });
}

//selects the winner for each round
function selWinner(){
    mainCard.src = "images/card.svg";
    gameData.win = Math.round(Math.random());
    console.log(`${gameData.win}`);
    if (gameData.win == 0) {
        turn.innerHTML = `The computer chooses: ${gameData.players[0]}`;
        gameData.score[0]++;
        setTimeout(function(){player2Turn();}, 4000);
        deck2.style.display = "none";
        setTimeout(function(){turn.innerHTML = `${gameData.players[1]}'s turn`;}, 2000);
        setTimeout(function(){setMainCard();}, 2000);
    }
    else if (gameData.win == 1) {
        turn.innerHTML = `The computer chooses: ${gameData.players[1]}`;
        gameData.score[1]++;
        setTimeout(function(){player1Turn();}, 4000);
        deck1.style.display = "none";
        setTimeout(function(){turn.innerHTML = `${gameData.players[0]}'s turn`;}, 2000);
        setTimeout(function(){setMainCard();}, 2000);
    }
    showCurrentScore();
};

/************** second round functions ***************/


//if player two won the last round, player one will go first this round
function player1Turn(){
    deck2.style.display = "none";
    deck1.style.display = "inline-flex";
    deck1.id = "cardsleftnew";

    oneCard1.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard1.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player2TurnNext();}, 2000);
    });
    oneCard2.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard2.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player2TurnNext();}, 2000);
    });
    oneCard3.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard3.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player2TurnNext();}, 2000);
    });
    oneCard4.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard4.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player2TurnNext();}, 2000);
    });
    oneCard5.addEventListener("click", function(e){
        e.preventDefault();        
        turn.innerHTML = `${gameData.players[1]}'s turn`;

        setPlayerCard();
        oneCard5.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player2TurnNext();}, 2000);
    });
}

//if player one goes first, player two will go next in this function and the winner will be selected again
function player2TurnNext(){
    deck1.style.display = "none";
    deck2.style.display = "inline-flex";
    deck2.id = "cardsrightnew";

    twoCard1.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        twoCard1.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
    twoCard2.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        twoCard2.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
    twoCard3.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        twoCard3.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
    twoCard4.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        twoCard4.src = `images/${gameData.playerCards[randPlay]}`;

        selWinner();
    });
    twoCard5.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        twoCard5.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
}

//if player one won the last round, player two will go first this round
function player2Turn(){
    deck1.style.display = "none";
    deck2.style.display = "inline-flex";
    deck2.id = "cardsrightnew";

    twoCard1.addEventListener("click", function(e){
        e.preventDefault();
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard1.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player1TurnNext();}, 2000);
    });
    twoCard2.addEventListener("click", function(e){
        e.preventDefault();
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard2.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player1TurnNext();}, 2000);
    });
    twoCard3.addEventListener("click", function(e){
        e.preventDefault();
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard3.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player1TurnNext();}, 2000);
    });
    twoCard4.addEventListener("click", function(e){
        e.preventDefault();
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard4.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player1TurnNext();}, 2000);
    });
    twoCard5.addEventListener("click", function(e){
        e.preventDefault();
        turn.innerHTML = `${gameData.players[0]}'s turn`;

        setPlayerCard();
        twoCard5.src = `images/${gameData.playerCards[randPlay]}`;

        setTimeout(function(){player1TurnNext();}, 2000);
    });
}

//if player two goes first, player one will go next in this function and the winner will be selected again
function player1TurnNext(){
    deck2.style.display = "none";
    deck1.style.display = "inline-flex";
    deck1.id = "cardsleftnew";

    oneCard1.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard1.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
    oneCard2.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard2.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
    oneCard3.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard3.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
    oneCard4.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard4.src = `images/${gameData.playerCards[randPlay]}`;

        selWinner();
    });
    oneCard5.addEventListener("click", function(e){
        e.preventDefault();        
        setPlayerCard();
        oneCard5.src = `images/${gameData.playerCards[randPlay]}`;

        selWinnerFin();
    });
}

//selects the winner for each round
function selWinnerFin(){
    mainCard.src = "images/card.svg";
    gameData.win = Math.round(Math.random());
    console.log(`${gameData.win}`);
    if (gameData.win == 0) {
        turn.innerHTML = `The computer chooses: ${gameData.players[0]}`;
        deck1.remove();
        deck2.remove();
        gameData.score[0]++;
    }
    else if (gameData.win == 1) {
        turn.innerHTML = `The computer chooses: ${gameData.players[1]}`;
        deck1.remove();
        deck2.remove();
        gameData.score[1]++;
    }
    setTimeout(function(){showWinner();}, 1000);
};

//keeps track of the score
function showCurrentScore() {
    scoreOne.innerHTML = `Score: ${gameData.score[0]}`;
    console.log(`Player 1 Score: ${gameData.score[0]}`);
    scoreTwo.innerHTML = `Score: ${gameData.score[1]}`;
    console.log(`Player 2 Score: ${gameData.score[1]}`);
}

function showWinner(){
    window.selWinner = function(){return false;};
    if(gameData.score[0] > 1){
        clearTimes();
        mainCard.src = "images/p1winner.svg";
        turn.style.fontSize = "60px";
        turn.innerHTML = `${gameData.players[0]} wins!`;
        playAgain.style.display = "block";
        playAgain.innerHTML = `Play again?`;

        playAgain.addEventListener("click", function(e){
            e.preventDefault();
            location.reload();
        });
    }
    else if (gameData.score[1] > 1){  
        clearTimes();
        mainCard.src = "images/p2winner.svg";        
        turn.style.fontSize = "60px";
        turn.innerHTML = `${gameData.players[1]} wins!`;
        playAgain.style.display = "block";
        playAgain.innerHTML = `Play again?`;
        playAgain.addEventListener("click", function(e){
            e.preventDefault();
            location.reload();
        });
    }
    else if ((gameData.score[0] == 1) && (gameData.score[1] == 1)){
        clearTimes();
        mainCard.src = "images/tiewinnersvg";        
        turn.style.fontSize = "60px";
        turn.innerHTML = `It's a tie!`;
        playAgain.style.display = "block";
        playAgain.innerHTML = `Play again?`;
        playAgain.addEventListener("click", function(e){
            e.preventDefault();
            location.reload();
        });
    }
    else {
        showCurrentScore();
    }
}

function clearTimes() {
    var stop1 = setTimeout(function(){player2Turn();}, 4000);
    clearTimeout(stop1);
    var stop2 = setTimeout(function(){turn.innerHTML = `${gameData.players[1]}'s turn`;}, 2000);
    clearTimeout(stop2);
    var stop3 = setTimeout(function(){setMainCard();}, 2000);
    clearTimeout(stop3);
    var stop4 = setTimeout(function(){player1Turn();}, 4000);
    clearTimeout(stop4);
    var stop5 = setTimeout(function(){turn.innerHTML = `${gameData.players[0]}'s turn`;}, 2000);
    clearTimeout(stop5);
    var stop6 = setTimeout(function(){setMainCard();}, 2000);
    clearTimeout(stop6);
    var stop7 = setTimeout(function(){player1Turn2();}, 2000);
    clearTimeout(stop7);
    var stop8 = setTimeout(function(){player2Turn2();}, 2000);
    clearTimeout(stop8);
    var stop9 = setTimeout(function(){player1TurnNext();}, 2000);
    clearTimeout(stop9);
    var stop10 = setTimeout(function(){player2TurnNext();}, 2000);
    clearTimeout(stop10);
}