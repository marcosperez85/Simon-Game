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
    userSequence.push = clickedPanel;
}

function highlightPanel(clickedPanel) {
    clickedPanel.style.opacity = 1;
    setTimeout(downlight, 500, clickedPanel);
}

function downlight(clickedPanel) {
    clickedPanel.style.opacity = 0.5;
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
    machineSequence.forEach(function (panel, index) {
        const delay_ms = (index + 1) * 1000;
        setTimeout(highlightPanel, delay_ms, panel);
    })

    setTimeout(function () {
        unblockUserInput();
        updateStateCol("User's turn");
    }, userDelay)

    userSequence = [];
    round++
    updateRoundCol(round);
}

function createRandomNumber() {
    let panelNumber = Math.floor(Math.random() * 4)
    return $panel[panelNumber];
}

function toLose() {
    updateStateCol("You lost. Press 'Play' to restart the game");
    restartGame()
}