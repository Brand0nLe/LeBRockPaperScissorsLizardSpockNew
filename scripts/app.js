// Brandon Le
// 1-20-23
// Rock Paper Scissors Lizard Spock
//HTML, CSS, JS, to create a RPSLS game. The purpose is to have options to play against the computer or play against a player 2 human. There are 3 game modes for best of 1, 5, and 7.
let playComputerBtn = document.getElementById("playComputerBtn");
let playHumanBtn = document.getElementById("playHumanBtn");

let gameMode1;
let gameMode2;
let gameMode3;
let rockBtn;
let paperBtn;
let scissorsBtn;
let lizardBtn;
let spockBtn;


let player1Choice;
let player2Choice;
let computerChoice;
// let button = document.getElementsByClassName("rpslsBtn");

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

// let gameMode1 = document.getElementById("gameMode1");
// let gameMode2 = document.getElementById("gameMode2");
// let gameMode3 = document.getElementById("gameMode3");
// let rockBtn = document.getElementById("rockBtn");
// let paperBtn = document.getElementById("paperBtn");
// let scissorsBtn = document.getElementById("scsissorsBtn");
// let lizardBtn = document.getElementById("lizardBtn");
// let spockBtn = document.getElementById("spockBtn");

let injectHere = document.getElementById("injectHere");
let injectHere2 = document.getElementById("injectHere2");
let injectHere3 = document.getElementById("injectHere3");
let injectHere4 = document.getElementById("injectHere4");




// Event Listener for the "Play With Computer" option. When I click this it will clear the text "Choose Your Opponent" and replace it with "Choose Your Game Mode". It will then clear the buttons and replace them with the Game Mode buttons.
playComputerBtn.addEventListener("click", function () {
    clearScreen();
    let h2 = document.createElement("h2");
    injectHere.appendChild(h2);
    h2.textContent = "Choose Your Game Mode";
    clearButton();
    makeButton1();
    makeButton2();
    makeButton3();

    // Event listener for choosing Best of 1 game mode. When I choose Best of 1 it will clear the text "Choose Your Game Mode" and replace it with "Player 1 Make your Choice". Then it will clear the game mode buttons and replace it with the choices for RPSLS.
    gameMode1 = document.getElementById("gameMode1").addEventListener("click", function () {
        clearScreen();
        let h2 = document.createElement("h2");
        injectHere3.appendChild(h2);
        h2.textContent = "Player 1 Make Your Choice"
        clearButton();
        makeButton4();
        makeButton5();
        makeButton6();
        makeButton7();
        makeButton8();
        //This code is for the rock paper scissors lizard spock options
        rockBtn = document.getElementById("rockBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        paperBtn = document.getElementById("paperBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        scissorsBtn = document.getElementById("scissorsBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        lizardBtn = document.getElementById("lizardBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        spockBtn = document.getElementById("spockBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });



        //Trying to get forEach to work so that it would target all buttons with the class choiceBtn and add the event listener to them since the buttons were injected into HTML via JS. But I wasn't able to get it to work this way.
        // choiceBtn.forEach(button => button.addEventListener("click", () => {
        //     player1Choice = button.textContent;
        //     getData();
        //     playerText.textContent = ("Player: " +  player1Choice );
        //     computerText.textContent = ("Computer: " +  computerChoice );
        //     resultText.textContent = determineWinner();
        // }));




    });



    // Event listener for choosing Best of 5 game mode. When I choose Best of 5 it will clear the text "Choose Your Game Mode" and replace it with "Player 1 Make your Choice". Then it will clear the game mode buttons and replace it with the choices for RPSLS.
    gameMode2 = document.getElementById("gameMode2").addEventListener("click", function () {
        clearScreen();
        let h2 = document.createElement("h2");
        injectHere3.appendChild(h2);
        h2.textContent = "Player 1 Make Your Choice"
        clearButton();
        makeButton4();
        makeButton5();
        makeButton6();
        makeButton7();
        makeButton8();
        //This code is for the rock paper scissors lizard spock options
        rockBtn = document.getElementById("rockBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        paperBtn = document.getElementById("paperBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        scissorsBtn = document.getElementById("scissorsBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        lizardBtn = document.getElementById("lizardBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        spockBtn = document.getElementById("spockBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
    });




    // Event listener for choosing Best of 7 game mode. When I choose Best of 7 it will clear the text "Choose Your Game Mode" and replace it with "Player 1 Make your Choice". Then it will clear the game mode buttons and replace it with the choices for RPSLS.
    gameMode3 = document.getElementById("gameMode3").addEventListener("click", function () {
        clearScreen();
        let h2 = document.createElement("h2");
        injectHere3.appendChild(h2);
        h2.textContent = "Player 1 Make Your Choice"
        clearButton();
        makeButton4();
        makeButton5();
        makeButton6();
        makeButton7();
        makeButton8();
        //This code is for the rock paper scissors lizard spock options
        rockBtn = document.getElementById("rockBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        paperBtn = document.getElementById("paperBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        scissorsBtn = document.getElementById("scissorsBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        lizardBtn = document.getElementById("lizardBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
        spockBtn = document.getElementById("spockBtn").addEventListener("click", event => {
            player1Choice = event.target.textContent;
            getData();
            playerText.textContent = ("Player: " + player1Choice);
            computerText.textContent = ("Computer: " + computerChoice);
            resultText.textContent = ("Result: " + determineWinner(player1Choice, computerChoice));
        });
    });
});










// Function to compare player 1 choice vs computer choice and determine the winner
function determineWinner(player1Choice, computerChoice) {
    if (player1Choice === computerChoice) {
        return "Draw - It's a TIE!!"
    } else if (
        (player1Choice === "Rock") && (computerChoice === "Scissors") ||
        (player1Choice === "Rock") && (computerChoice === "Lizard") ||
        (player1Choice === "Paper") && (computerChoice === "Rock") ||
        (player1Choice === "Paper") && (computerChoice === "Spock") ||
        (player1Choice === "Scissors") && (computerChoice === "Paper") ||
        (player1Choice === "Scissors") && (computerChoice === "Lizard") ||
        (player1Choice === "Lizard") && (computerChoice === "Paper") ||
        (player1Choice === "Lizard") && (computerChoice === "Spock") ||
        (player1Choice === "Spock") && (computerChoice === "Rock") ||
        (player1Choice === "Spock") && (computerChoice === "Scissors")
    ) {
        return ("You win!");
    } else {
        return ("You lose!");
    }
}





// Event Listener for "Play with Human". When I click this it will clear the text "Choose Your Opponent" and replace it with "Choose Your Game Mode". It will then clear the buttons and replace them with the Game Mode buttons.
playHumanBtn.addEventListener("click", function () {
    clearScreen();
    let h2 = document.createElement("h2");
    injectHere.appendChild(h2);
    h2.textContent = "Choose Your Game Mode";
    clearButton();
    makeButton1();
    makeButton2();
    makeButton3();
});















// Function to create a button - For the Choose Game Mode section
function makeButton1() {
    let button = document.createElement("button");
    button.id = "gameMode1";
    button.className = "btn btnSize";
    button.type = "button";
    button.textContent = "Best of 1";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize";

    btnDiv.appendChild(button);
    injectHere.appendChild(button);
}
function makeButton2() {
    let button = document.createElement("button");
    button.className = "btn btnSize";
    button.id = "gameMode2";
    button.type = "button";
    button.textContent = "Best of 5";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize";

    btnDiv.appendChild(button);
    injectHere.appendChild(button);
}
function makeButton3() {
    let button = document.createElement("button");
    button.className = "btn btnSize";
    button.id = "gameMode3";
    button.type = "button";
    button.textContent = "Best of 7";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize";

    btnDiv.appendChild(button);
    injectHere.appendChild(button);
}
// End Choose game mode buttons



// Buttons for RPSLS
function makeButton4() {
    let button = document.createElement("button");
    button.className = "btn btnSize choiceBtn";
    button.id = "rockBtn";
    button.type = "button";
    button.textContent = "Rock";
    // player1Choice = "Rock";

    // button.addEventListener("click", function(){
    //     alert('I work')
    // });

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize choiceBtn";

    btnDiv.appendChild(button);
    injectHere4.appendChild(button);
}
function makeButton5() {
    let button = document.createElement("button");
    button.className = "btn btnSize choiceBtn";
    button.onclick = "paper";
    button.id = "paperBtn";
    button.type = "button";
    button.textContent = "Paper";
    // player1Choice = "Paper";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize choiceBtn";

    btnDiv.appendChild(button);
    injectHere4.appendChild(button);
}
function makeButton6() {
    let button = document.createElement("button");
    button.className = "btn btnSize choiceBtn";
    button.id = "scissorsBtn";
    button.type = "button";
    button.textContent = "Scissors";
    // player1Choice = "Scissors";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize choiceBtn";

    btnDiv.appendChild(button);
    injectHere4.appendChild(button);
}
function makeButton7() {
    let button = document.createElement("button");
    button.className = "btn btnSize choiceBtn";
    button.id = "lizardBtn";
    button.type = "button";
    button.textContent = "Lizard";
    // player1Choice = "Lizard";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize choiceBtn";

    btnDiv.appendChild(button);
    injectHere4.appendChild(button);
}
function makeButton8() {
    let button = document.createElement("button");
    button.className = "btn btnSize choiceBtn";
    button.id = "spockBtn";
    button.type = "button";
    button.textContent = "Spock";
    // player1Choice = "Spock";

    let btnDiv = document.createElement("div");
    btnDiv.className = "btn btnSize choiceBtn";

    btnDiv.appendChild(button);
    injectHere4.appendChild(button);
}
// End Buttons for RPSLS




//use this function to clear the screen before you have new items appear. This is for the Choose Your Opponent options.
function clearScreen() {
    injectHere.innerHTML = "";
}
// use this function to clear the buttons for after you click and want new buttons to appear.
function clearButton() {
    injectHere2.innerHTML = "";
}

// Same as above but for the game mode options
function clearScreen2() {
    injectHere3.innerHTML = "";
}
function clearButton2() {
    injectHere4.innerHTML = "";
}







// Code from Ken that fetches the API for computer random generated choice.
function getData() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(response => response.text()).then(data => {
        console.log(data);
        computerChoice = data;
    });
}
getData();


