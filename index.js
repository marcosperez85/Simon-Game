const $stateCol = document.querySelector(".stateCol");
const $roundCol = document.querySelector(".roundCol");
const $panel = document.querySelectorAll(".circuloGrande");
const $startBtn = document.querySelector("button");

let machineSequence = [];
let userSequence = [];
let round = 0;

blockUserInput();
updateStateCol("Press Play to start the game");

$startBtn.onclick = function () {
    restartGame();
    roundHandler();
}

function handleUserInput(e) {
    const clickedPanel = e.target;
    highlightPanel(clickedPanel)
    userSequence.push(clickedPanel);

    // Create a temporary machinePanel with the latest input from the user
    const machinePanel = machineSequence[userSequence.length - 1];
    if (clickedPanel.id !== machinePanel.id) {
        toLose();
        return;
    }

    // This condition is only met once the user has passed the previous conditon for all PC panels
    if (userSequence.length == machineSequence.length) {
        blockUserInput();
        setTimeout(roundHandler, 1000);
    }
}

function highlightPanel(clickedPanel) {
    clickedPanel.style.opacity = 1;
    clickedPanel.style.border = "3px solid white";
    setTimeout(downlight, 500, clickedPanel);
}

function downlight(clickedPanel) {
    clickedPanel.style.opacity = 0.5;
    clickedPanel.style.border = "0px solid white";
}

function restartGame() {
    machineSequence = [];
    userSequence = [];
    round = 0;
}

function updateStateCol(gameState) {
    $stateCol.textContent = gameState;
}

function updateRoundCol(round) {
    $roundCol.innerText = "Round: " + round;
}

function blockUserInput() {
    $panel.forEach(function (elem) {
        elem.onclick = function () {/*Empty function to indicate that nothing should happen */ }
    })
}

function unblockUserInput() {
    $panel.forEach(function (elem) {
        elem.onclick = handleUserInput;
    })
}

function roundHandler() {
    updateStateCol("Computer's turn");
    const newPanel = createRandomNumber();
    machineSequence.push(newPanel)

    // Create a one second delay for each PC movement plus one additional second
    const userDelay = (machineSequence.length + 1) * 1000;

    // Call the highlightPanel function after one second for each element in the PC array
    machineSequence.forEach(function(panel, index) {
        const delay_ms = (index + 1) * 1000;
        setTimeout(highlightPanel, delay_ms, panel);
    })

    setTimeout(function () {
        updateStateCol("User's turn");
        unblockUserInput();
    }, userDelay)

    // User's sequence always has to be reset after each round.
    userSequence = [];
    round++
    updateRoundCol(round);
}

function createRandomNumber() {
    let panelNumber = Math.floor(Math.random() * 4)
    return $panel[panelNumber];
}

function toLose() {
    updateStateCol("You lost. Press PLAY to restart");
    restartGame()
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}