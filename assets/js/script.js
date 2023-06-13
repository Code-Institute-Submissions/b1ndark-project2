/**
 * Buttons to access its containers
 */

const startButton = document.getElementById("start-btn");


/**
 * Containers
 */
const startMenu = document.getElementById("menu-container");
const difficultyContainerElement = document.getElementById("difficulty-container");


/**
 * By pressing Start it will take you to Difficulty Menu
 */
startButton.addEventListener('click', selectDifficulty);

function selectDifficulty() {
    console.log('difficulty menu');
    startMenu.classList.add('hide');
    difficultyContainerElement.classList.remove('hide');
    console.log('closed main menu')
}