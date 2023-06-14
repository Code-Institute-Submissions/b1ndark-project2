/**
 * Buttons to access its containers
 * Variables
 */
const startButton = document.getElementById("start-btn");
const instructionsButton = document.getElementById("instructions-btn");
const closeInstructionsButton = document.getElementById("close-instructions-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0;

// Difficulty menu selection
const easyButton = document.getElementById('easy-btn');

/**
 * Containers
 */
const startMenu = document.getElementById("menu-container");
const difficultyContainerElement = document.getElementById("difficulty-container");
const instructionsContainerElement = document.getElementById("instructions-container");
const questionContainerElement = document.getElementById("question-container");

/**
 * Instructions container
 * By selecting Instructions button, you will be taken to Instructions container
 * Event Listener to select Instructions
 */
instructionsButton.addEventListener('click', selectInstructions);

// This function will open the Instructions container
function selectInstructions() {
    console.log("open instructions");
    startMenu.classList.add('hide');
    instructionsContainerElement.classList.remove('hide');
}

/**
 * By pressing Close button, it will close the Instructions container and take you back to Main Menu Container
 * Event Listener to close instructions
 */
closeInstructionsButton.addEventListener('click', selectMainMenu);

// This function will close the Instructions container
function selectMainMenu() {
    console.log("close instructions");
    instructionsContainerElement.classList.add('hide');
    startMenu.classList.remove('hide');
    console.log('back to Main Menu');
}


/**
 * By pressing Start it will take you to the Difficulty Menu
 * Event Listener to take back to Difficulty Menu
 */
startButton.addEventListener('click', selectDifficulty);

// Function to close Start Menu and open Difficulty Menu
function selectDifficulty() {
    console.log('difficulty menu');
    startMenu.classList.add('hide');
    difficultyContainerElement.classList.remove('hide');
    console.log('closed main menu')
}


/**
 * There are three modes Easy, Medium and Hard
 * The game will start on the mode that you have selected
 */

 
// Event Listener will open and start Easy mode quiz
easyButton.addEventListener('click', selectEasyQuiz);

// This fucntion will select Easy mode and start it
function selectEasyQuiz() {
    console.log('you have selected easy mode');
    difficultyContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    showEasyQuestion()
}

/**
 * This function will show questions and its answers
 */

function showEasyQuestion() {
    console.log("show question");
    /**
     * This function will show current question
     * Data for the questions will be collected from game.js file
     */
    let currentEasyQuestion = easyQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentEasyQuestion.question;

    /**
     * This function is to show answers of the current question
     * It will add a button for each answer of the current question, in this case 4 answers
     * Data for the answers will be collected from game.js file
     */
    currentEasyQuestion.answers.forEach(answer => {
        console.log("answers displayed");
        const answerButton = document.createElement("button");
        answerButton.innerHTML = answer.text;
        answerButton.classList.add("btn");
        answerButtons.appendChild(answerButton);

        // This Event Listener is to select an answer
        answerButton.addEventListener('click', selectEasyAnswer);
    });
};


/**
 * This function will activate as soon as the User selects an answer
 */
function selectEasyAnswer() {
    console.log("answer selected")
}


