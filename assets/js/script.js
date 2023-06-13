/**
 * Buttons to access its containers
 */
const startButton = document.getElementById("start-btn");
const instructionsButton = document.getElementById("instructions-btn");
const closeInstructionsButton = document.getElementById("close-instructions-btn");


/**
 * Containers
 */
const startMenu = document.getElementById("menu-container");
const difficultyContainerElement = document.getElementById("difficulty-container");
const instructionsContainerElement = document.getElementById("instructions-container");


/**
 * Instructions container
 */ 

// By pressing Instructions it will open the Instructions container
instructionsButton.addEventListener('click', selectInstructions);

function selectInstructions() {
    console.log("open instructions");
    startMenu.classList.add('hide');
    instructionsContainerElement.classList.remove('hide');
}

// By pressing Close button, it will close the Instructions container and take you back to Main Menu Container

closeInstructionsButton.addEventListener('click', selectMainMenu);

function selectMainMenu() {
    console.log("close instructions");
    instructionsContainerElement.classList.add('hide');
    startMenu.classList.remove('hide');
    console.log('back to Main Menu');
}


/**
 * By pressing Start it will take you to the Difficulty Menu
 */
startButton.addEventListener('click', selectDifficulty);

function selectDifficulty() {
    console.log('difficulty menu');
    startMenu.classList.add('hide');
    difficultyContainerElement.classList.remove('hide');
    console.log('closed main menu')
}