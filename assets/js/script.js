/**
 * Buttons to access its containers
 * Global Variables
 */
const startButton = document.getElementById("start-btn");
const instructionsButton = document.getElementById("instructions-btn");
const closeInstructionsButton = document.getElementById("close-instructions-btn");
const backToIndexButton = document.getElementById("back-to-index-btn");
const backToDifficultyMenu = document.getElementById("back-to-difficulty-menu");
const submitButton = document.getElementById("submit-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreAreaDisplay = document.getElementById("score-area");
const answeredQuestionsCounter = document.getElementById("answered-question-counter");
const progressAnsweredQuestionBarFull = document.getElementById("fill-up-progress-question-bar");
const usernameInput = document.getElementById("usernameInput");


let currentQuestionIndex = 0;
let score = 0;
let currentQuestion = {};
let difficulty = "";


/** 
 * Containers
 */
const startMenu = document.getElementById("menu-container");
const difficultyContainerElement = document.getElementById("difficulty-container");
const instructionsContainerElement = document.getElementById("instructions-container");
const questionContainerElement = document.getElementById("question-container");
const formContainer = document.getElementById("form-display");
const scoreboardContainerElement = document.getElementById("scoreboard-container");

/**
 * Instructions container
 * By selecting Instructions button, you will be taken to Instructions container
 * This function will open the Instructions contain
 */
function selectInstructions() {
    startMenu.classList.add('hide');
    instructionsContainerElement.classList.remove('hide');
}

/**
 * Scoreboard container
 * By selecting Scoreboard button, you will be taken to Scoreboard container
 */
function selectScoreboard() {
    startMenu.classList.add('hide');
    scoreboardContainerElement.classList.remove('hide');
    showScoreboard();
}


/**
 * By pressing Close button, it will close the Instructions container and take you back to Main Menu Container
 * This function will close the Instructions container
 */
function selectMainMenu() {
    instructionsContainerElement.classList.add('hide');
    startMenu.classList.remove('hide');
    scoreboardContainerElement.classList.add('hide');
}


/**
 * By pressing Start it will take you to the Difficulty Menu
 * Function to close Start Menu and open Difficulty Menu
 */
function selectDifficulty() {
    startMenu.classList.add('hide');
    difficultyContainerElement.classList.remove('hide');
    questionContainerElement.classList.add('hide');
    //This line was added to reset the score incase the user goes back to difficulty menu
    document.getElementById("correct-answers-score").innerText = 0;
}


/**
 * Love Maths project helped me with this function
 * This Function will get the current score
 * and increase it by 1 as you progress and select correct answers
 */
function addCorrectAnswersScore() {
    let previousCorrectAnswersScore = parseInt(document.getElementById("correct-answers-score").innerText);
    document.getElementById("correct-answers-score").innerText = ++previousCorrectAnswersScore;
}


// Difficulty menu selection
const easy = document.getElementById("easy-btn");
const medium = document.getElementById("medium-btn");
const hard = document.getElementById("hard-btn");

/** 
 * There are three modes Easy, Medium and Hard
 * The game will start on the mode that you have selected
 */

function selectQuiz(selectedDifficulty) {
    difficultyContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    difficulty = selectedDifficulty;
    showQuestion();
}

/**
 * This function will reset answers from previous questions
 * 
 */
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


/**
 * This function will show questions and its answers
 */

function showQuestion() {
    resetState();

    /**
     * This function will show current question
     * Data for the questions will be collected from game.js file
     * It will pick the questions from the mode you have choosen
     */
    if (difficulty == easy) {
        currentQuestion = easyQuestions[currentQuestionIndex];
    } else if (difficulty == medium) {
        currentQuestion = mediumQuestions[currentQuestionIndex];
    } else {
        currentQuestion = hardQuestions[currentQuestionIndex];
    }
    questionElement.innerHTML = currentQuestion.question;

    // This will workout what question you are on and display it
    currentQuestionIndex++;
    answeredQuestionsCounter.innerHTML = `${currentQuestionIndex}/10`;

    // This will display a progression bar
    progressAnsweredQuestionBarFull.style.width = `${(currentQuestionIndex / 10) * 100}%`;


    /**
     * This function is to show answers of the current question
     * It will add a button for each answer of the current question, in this case 4 answers
     * Data for the answers will be collected from game.js file
     */
    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement("button");
        answerButton.innerHTML = answer.text;
        answerButton.classList.add("btn");
        answerButtons.appendChild(answerButton);
        if (answer.correct) {
            answerButton.dataset.correct = answer.correct;
        }

        // This Event Listener is to select an answer
        answerButton.addEventListener('click', selectAnswer);
    });
}


/**
 * This function will activate as soon as the User selects an answer
 */
function selectAnswer(event) {
    const selectedAnswerButton = event.target;
    const correctAnswer = selectedAnswerButton.dataset.correct === "true";

    /**
     * The answer will be checked whether is correct or wrong
     * Also class has been added to decorate/style the correct and wrong answers
     **/
    if (correctAnswer) {
        selectedAnswerButton.classList.add("correct-answer");
        score++;
        addCorrectAnswersScore();
    } else {
        selectedAnswerButton.classList.add("wrong-answer");
    }

    // Soon as the answer is selected whether is correct or wrong, all answers will be locked.
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct-answer");
        }
        button.disabled = true;
    });

    // Once answer is selected whether is correct or wrong it will automatically move to the next one
    setTimeout(() => {
        handleNextQuestion();
    }, 1500);
}


/**
 * This function will show the user score at the end of the quiz.
 * A text message has been added to congratulate the user.
 */
function showScore() {
    resetState();
    let username = localStorage.getItem('username');
    questionElement.innerHTML = `Well done ${username} in completing the quiz!` +
        `<br> You have answered ${score} correct out of ${10} questions!`;

    // This will display Main Menu button
    backToIndexButton.style.display = 'block';

    // This will Hide Score Area
    scoreAreaDisplay.style.display = 'none';

    // This will Hide the back button
    backToDifficultyMenu.style.display = 'none';
}


/**
 * This function adds next question so the user can carry on with the quiz
 * Next question Data will be loaded from game.js file
 */
function handleNextQuestion() {
    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        showScore();
    }

    //save the score in to localstorage
    localStorage.setItem('score', score);
};


// This Event Listener is to activate the submit button once you type username
usernameInput.addEventListener('keyup', () => {
    submitButton.disabled = !usernameInput.value;
});

//This Event Listener is to activate Start button once username is submited
submitButton.addEventListener('mousedown', () => {
    startButton.disabled = !submitButton == 'none';
})

/**
 * This Function will localstore the username 
 * so we can display it in the title and at the end of the game.
 */
function usernameSubmit() {
    let inputUsername = document.getElementById("usernameInput").value;
    let chosenUsername = document.getElementById("chosen-username");
    formContainer.style.display = 'none';
    localStorage.setItem('username', inputUsername);
    chosenUsername.innerHTML = " " + inputUsername;
}

/**
 * This function will access the localstorage and get username and score to store on scoreboard
 */
function showScoreboard() {
    let showScoreList = document.getElementById("scoreboard-list");
    const username = localStorage.getItem('username');
    const endScore = localStorage.getItem('score');
    const scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];
    let score = {
        score: endScore,
        username: `${username}`
    };

    //This is to prevent from showing null in scoreboard if the user hasn't played yet
    if (score.score > 1) {
        scoreboard.push(score);
        showScoreList.innerHTML = scoreboard
            .map(score => {
                return `<li class="score-list">${score.username} - ${score.score}</li>`;
            })
            .join("");
    } else {
        //It won't show null on scoreboard
        showScoreList.innerHTML = "";
    };
}