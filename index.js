const $stateCol = document.querySelector(".stateCol");
const $roundCol = document.querySelector(".roundCol");
const $panel = document.querySelectorAll(".panel")
const $startBtn = document.querySelector("button");

let machineSequence = [];
let userSequence = [];
let round = 0;

$startBtn.onclick = function () {
    restartGame();
    updateStateCol("Computer's turn");
    blockUserInput();
    roundHandler();

    const userDelay = (machineSequence.length + 1) * 1000;

    machineSequence.forEach(function (elem, index) {
        const delay_ms = (index + 1) * 1000;
        setTimeout(function () {
            highlightPanel(elem)
        },  delay_ms)
    })

    setTimeout(function () {
        unblockUserInput();
        updateStateCol("User's turn");
    }, userDelay)

    userSequence = [];
    round++
    updateRoundCol(round);
}

function handleUserInput(e) {
    const clickedPanel = e.target;
    highlightPanel(clickedPanel)
}

function highlightPanel(panel) {
    panel.className = "bright"
}

function restartGame() {
    machineSequence = [];
    userSequence = [];
}

function updateStateCol(gameState) {
    $stateCol.textContent = gameState;
}

function updateRoundCol(round) {
    $roundCol.innerText = "Round: " + round;
}

function blockUserInput() {
    $panel.forEach(function(elem) {
        elem.onclick = function() {/*Empty function to indicate that nothing should happen */ }
    })
}

function unblockUserInput() {
    $panel.forEach(function(elem) {
        elem.onclick = handleUserInput()
    })
}

function roundHandler() {
    const newPanel = createRandomNumber();
    machineSequence.push(newPanel)
}

function createRandomNumber() {
    return Math.floor(Math.random() * 4)
}

function toLose() {
    updateStateCol("You lost. Press 'Play' to restart the game");
}