/**
 * Buttons to access its containers and Global Variables
 * Watched various tutorials on youtube which I will leave below-
 * https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
 * https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack
 * https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=1&ab_channel=JamesQQuick
 */
const startButton = document.getElementById("start-btn");
const backToIndexButton = document.getElementById("back-to-index-btn");
const backToDifficultyMenu = document.getElementById("back-to-difficulty-menu");
const submitButton = document.getElementById("submit-btn");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreAreaDisplay = document.getElementById("score-area");
const answeredQuestionsCounter = document.getElementById("answered-question-counter");
const progressAnsweredQuestionBarFull = document.getElementById("fill-up-progress-question-bar");
const usernameInput = document.getElementById("usernameInput");
const scoreboardButton = document.getElementById("scoreboard-btn");
const instructionsButton = document.getElementById("instructions-btn");
const closeScoreboardButton = document.getElementById("close-scoreboard-btn");
const backButton = document.getElementById("back-btn");
const closeInstructionsButton = document.getElementById("close-instructions-btn");

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


function resetLocalStorage() {
    // to stop scoreboard bug, everytime you repeated countless times going into scoreboard and exit, it would add same score to scoreboard.
    localStorage.removeItem('score');
    localStorage.removeItem('username');
}

/**
 * Instructions container
 * By selecting Instructions button, you will be taken to Instructions container
 * This function will open the Instructions contain
 */
instructionsButton.addEventListener('click', selectInstructions);

function selectInstructions() {
    startMenu.classList.add('hide');
    instructionsContainerElement.classList.remove('hide');
}
closeInstructionsButton.addEventListener('click', selectMainMenu);

/**
 * Scoreboard container
 * By selecting Scoreboard button, you will be taken to Scoreboard container
 */
scoreboardButton.addEventListener('click', selectScoreboard);

function selectScoreboard() {
    startMenu.classList.add('hide');
    scoreboardContainerElement.classList.remove('hide');
    showScoreboard();
}
closeScoreboardButton.addEventListener('click', selectMainMenu);
/**
 * By pressing Close button, it will close the Instructions container and take you back to Main Menu Container
 * This function will close the Instructions container
 */
backToIndexButton.addEventListener('click', selectMainMenu);

function selectMainMenu() {
    resetLocalStorage();
    instructionsContainerElement.classList.add('hide');
    startMenu.classList.remove('hide');
    scoreboardContainerElement.classList.add('hide');
    questionContainerElement.classList.add('hide');
    formContainer.style.display = 'flex';
    difficultyContainerElement.classList.add('hide');
}

// This add Event Listener is checking whether the user has entered the username or not in oreder to start
startButton.addEventListener('click', () => {
    let username = localStorage.getItem('username');
    if (username == null || username == "") {
        alert("In order to continue please enter username first!");
    } else {
        selectDifficulty();
    }
});

/**
 * By pressing Start it will take you to the Difficulty Menu
 * Function to close Start Menu and open Difficulty Menu
 */
backToDifficultyMenu.addEventListener('click', selectDifficulty);

function selectDifficulty() {
    startMenu.classList.add('hide');
    difficultyContainerElement.classList.remove('hide');
    questionContainerElement.classList.add('hide');
    //This line was added to reset the score incase the user goes back to difficulty menu
    document.getElementById("correct-answers-score").innerText = 0;
}
backButton.addEventListener('click', selectMainMenu);

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

hard.addEventListener('click', selectQuiz);

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

// This function will reset answers from previous questions
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// This function is to reset everyhting after playing first time, was having issues as the Score Area and Back button weren't being displayed
function resetQuestionContainer() {
    // This will display Main Menu button
    backToIndexButton.style.display = 'none';
    // This will Hide Score Area
    scoreAreaDisplay.style.display = 'flex';
    // This will Hide the back button
    backToDifficultyMenu.style.display = 'block';
}

/**
 * This function will show questions and its answers
 */
function showQuestion() {
    resetState();
    resetQuestionContainer();
    // This function will show current question
    // Data for the questions will be collected from game.js file
    // It will pick the questions from the mode you have choosen
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

    // This function is to show answers of the current question
    // It will add a button for each answer of the current question, in this case 4 answers
    // Data for the answers will be collected from game.js file
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

    // The answer will be checked whether is correct or wrong
    // Also class has been added to decorate/style the correct and wrong answers
    if (correctAnswer) {
        if (difficulty == easy) {
            score++;
        } else if (difficulty == medium) {
            score += 2;
        } else {
            score += 5;
        }
        selectedAnswerButton.classList.add("correct-answer");
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
        `<br> You have scored ${score} points!`;

    // This will display Main Menu button
    backToIndexButton.style.display = 'block';

    // This will Hide Score Area
    scoreAreaDisplay.style.display = 'none';

    // This will Hide the back button
    backToDifficultyMenu.style.display = 'none';
    showScoreboard();
    resetLocalStorage();
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
}

// This Event Listener is to activate the submit button once you type username
usernameInput.addEventListener('keyup', () => {
    submitButton.disabled = !usernameInput.value;
});

/**
 * This Function will localstore the username 
 * so we can display it in the title and at the end of the game.
 * Watched on youtube https://www.youtube.com/watch?v=KB6Yg5hNrqc&ab_channel=KeithPaterson
 */
submitButton.addEventListener('click', usernameSubmit);

function usernameSubmit() {
    let inputUsername = document.getElementById("usernameInput").value;
    let chosenUsername = document.getElementById("chosen-username");
    formContainer.style.display = 'none';
    localStorage.setItem('username', inputUsername);
    chosenUsername.innerHTML = " " + inputUsername;
}

/**
 * This function will access the localstorage and get username and score to store on scoreboard
 * Watched https://www.youtube.com/watch?v=jfOv18lCMmw&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=9&ab_channel=JamesQQuick
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

    // This is to prevent from showing null in scoreboard if the user hasn't played yet
    if (score.score === null || score.username && null) {
        //It won't show null on scoreboard if user hasn't played yet
        return '';
    } else {
        scoreboard.push(score);
        // To sort scores in order from the highest at the top to the lowest at the bottom
        scoreboard.sort((a, b) => b.score - a.score);
        // Keeps the top 5 scores by removing the lowest ones from the array
        scoreboard.splice(5);
        // To convert into a string
        localStorage.setItem('scoreboard', JSON.stringify((scoreboard)));
        showScoreList.innerHTML = scoreboard
            .map(score => {
                return `<li class="score-list">${score.username} - ${score.score}</li>`;
            })
            .join("");
    }
}