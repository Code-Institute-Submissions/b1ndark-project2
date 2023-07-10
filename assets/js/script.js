// I have used stackoverflow to import content from another file 
// https://stackoverflow.com/questions/26650721/how-to-use-javascript-constant-in-javascript-file-from-another-javascript-file
import {
    easyQuestions,
    mediumQuestions,
    hardQuestions
} from "./game.js";
/**
 * Buttons to access its containers and Global Variables
 * I have watched some tutorials on Youtube that have helped me with understanding and learning new features along the project, I will leave them below:
 * https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
 * https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack
 * https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=1&ab_channel=JamesQQuick
 */
const startButton = document.getElementById("start-btn");
const backToIndexButton = document.getElementById("back-to-index-btn");
const backToMainMenu = document.getElementById("back-to-main-menu");
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
let currentQuestionCounterIndex = 0;
let score = 0;
let currentQuestion = {};
let difficulty = "";
let eachModeQuestions = [];

/** 
 * Containers
 */
const startMenu = document.getElementById("menu-container");
const difficultyContainerElement = document.getElementById("difficulty-container");
const instructionsContainerElement = document.getElementById("instructions-container");
const questionContainerElement = document.getElementById("question-container");
const formContainer = document.getElementById("form-display");
const scoreboardContainerElement = document.getElementById("scoreboard-container");

// Function to delete all the localStorage, to avoid issues and bugs with scoreboard
function resetLocalStorage() {
    localStorage.removeItem('score');
    localStorage.removeItem('username');
}

/**
 * Instructions container
 * By selecting Instructions button, you will be taken to Instructions container
 * Event Listener to open and close instructions
 */
instructionsButton.addEventListener('click', selectInstructions);
//This function will open the Instructions container
function selectInstructions() {
    startMenu.classList.add('hide');
    instructionsContainerElement.classList.remove('hide');
}
closeInstructionsButton.addEventListener('click', selectMainMenu);

/**
 * Scoreboard container
 * By selecting Scoreboard button, you will be taken to Scoreboard container
 * Event Listener to open and close scoreboard
 */
scoreboardButton.addEventListener('click', selectScoreboard);
//This function will open the scoreboard container
function selectScoreboard() {
    startMenu.classList.add('hide');
    scoreboardContainerElement.classList.remove('hide');
    showScoreboard();
}
closeScoreboardButton.addEventListener('click', selectMainMenu);

/**
 * Event Listener to take you back to Main Menu container
 */
backToIndexButton.addEventListener('click', () => {
    document.location.href = "index.html";
});
//This function will open the Main Menu container
function selectMainMenu() {
    instructionsContainerElement.classList.add('hide');
    startMenu.classList.remove('hide');
    scoreboardContainerElement.classList.add('hide');
    questionContainerElement.classList.add('hide');
    formContainer.style.display = 'flex';
    difficultyContainerElement.classList.add('hide');
}

// This add Event Listener is checking whether the user has entered the username or not in order to start
startButton.addEventListener('click', () => {
    let username = localStorage.getItem('username');
    if (username == null || username == "") {
        alert("In order to continue please enter username first!");
    } else {
        selectDifficulty();
    }
});

/**
 * By pressing Start it will ask the user whether he/she wants to stop the Quiz
 * Event listener to take you back to Main Menu
 */
backToMainMenu.addEventListener('click', () => {
    let confirmation = confirm('are you sure you want to stop the quiz?');
    //If Statement to check whether you want or not to go back
    if (confirmation) {
        document.location.href = "index.html";
    } else {
        alert("You will carry on testing your knowledge");
    }
});
//Function will open the Difficulty Menu container
function selectDifficulty() {
    startMenu.classList.add('hide');
    difficultyContainerElement.classList.remove('hide');
    questionContainerElement.classList.add('hide');
    //This line was added to reset the score in case the user goes back to difficulty menu
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
//Event Listener for Easy mode
easy.addEventListener('click', () => {
    selectQuiz(easy);
});
//Event Listener for Medium mode
medium.addEventListener('click', () => {
    selectQuiz(medium);
});
//Event Listener for Hard mode
hard.addEventListener('click', selectQuiz);

/** 
 * There are three modes Easy, Medium and Hard
 * The game will start on the mode that you have selected
 */
function selectQuiz(selectedDifficulty) {
    difficultyContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionCounterIndex = 0;
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

// This function is to reset everything after playing first time, was having issues as the Score Area and Back button weren't being displayed
function resetQuestionContainer() {
    // This will display Main Menu button
    backToIndexButton.style.display = 'none';
    // This will Hide Score Area
    scoreAreaDisplay.style.display = 'flex';
    // This will Hide the back button
    backToMainMenu.style.display = 'block';
}

/**
 * This function will show questions and its answers
 */
function showQuestion() {
    resetState();
    resetQuestionContainer();
    // This function will show current question
    // Data for the questions will be collected from game.js file
    // It will pick the questions from the mode you have chosen
    // Each mode will have their questions shuffled, by using Math.floor and Math.random * their length
    if (difficulty == easy) {
        eachModeQuestions = easyQuestions;
        currentQuestionIndex = Math.floor(Math.random() * eachModeQuestions.length);
        currentQuestion = eachModeQuestions[currentQuestionIndex];
    } else if (difficulty == medium) {
        eachModeQuestions = mediumQuestions;
        currentQuestionIndex = Math.floor(Math.random() * eachModeQuestions.length);
        currentQuestion = eachModeQuestions[currentQuestionIndex];
    } else {
        eachModeQuestions = hardQuestions;
        currentQuestionIndex = Math.floor(Math.random() * eachModeQuestions.length);
        currentQuestion = eachModeQuestions[currentQuestionIndex];
    }
    questionElement.innerHTML = currentQuestion.question;

    // This will work out what question you are on and display it
    currentQuestionCounterIndex++;
    answeredQuestionsCounter.innerHTML = `${currentQuestionCounterIndex}/10`;

    // This will display a progression bar
    progressAnsweredQuestionBarFull.style.width = `${(currentQuestionCounterIndex / 10) * 100}%`;

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
    // This will splice the questions that have been shown, to prevent from repeating them
    eachModeQuestions.splice(currentQuestionIndex, 1);
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
            // Easy mode adds 1 score per each correct answer
            score++;
        } else if (difficulty == medium) {
            // Medium mode adds 2 score per each correct answer
            score += 2;
        } else {
            // Hard mode adds 5 score per each correct answer
            score += 5;
        }
        selectedAnswerButton.classList.add("correct-answer");
        addCorrectAnswersScore();
    } else {
        selectedAnswerButton.classList.add("wrong-answer");
    }

    // Soon as the answer is selected whether is correct or wrong, all answer buttons will be disabled.
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct-answer");
        }
        button.disabled = true;
    });

    // Once answer is selected whether is correct or wrong it will automatically move to the next one in 1.5 seconds
    setTimeout(() => {
        handleNextQuestion();
    }, 1500);
}

/**
 * This function will show the user score at the end of the quiz.
 * A text message has been added to congratulate the user.
 */
function showScore() {
    //save the score in to localstorage
    localStorage.setItem('score', score);
    resetState();
    // If statement to check if user has score atleast 1 point
    if (score == 0) {
        let username = localStorage.getItem('username');
        questionElement.innerHTML = `Please try again ${username}!` +
            `<br> You have scored ${score} points!`;
    } else {
        let username = localStorage.getItem('username');
        questionElement.innerHTML = `Well done ${username} in completing the quiz!` +
            `<br> You have scored ${score} points!`;
    }

    // This will display Main Menu button
    backToIndexButton.style.display = 'block';

    // This will Hide Score Area
    scoreAreaDisplay.style.display = 'none';

    // This will Hide the back button
    backToMainMenu.style.display = 'none';
    showScoreboard();
    resetLocalStorage();
}

/**
 * This function adds next question so the user can carry on with the quiz
 * Next question Data will be loaded from game.js file
 */
function handleNextQuestion() {
    if (currentQuestionCounterIndex < 10) {
        showQuestion();
    } else {
        showScore();
    }
}

// This Event Listener is to activate the submit button once you type username
usernameInput.addEventListener('keyup', () => {
    submitButton.disabled = !usernameInput.value;
});

// This Event Listener is to prevent form default action
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    usernameSubmit();
});

/**
 * This Function will localStore the username 
 * so we can display it in the title and at the end of the game.
 * Watched on Youtube to help me understanding https://www.youtube.com/watch?v=KB6Yg5hNrqc&ab_channel=KeithPaterson
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

    // This is to prevent the scores to be shown null if username hasn't played yet, instead it will show an empty scoreboard
    // If statement used to check it 
    if (score.score === null || score.username == "") {
        showScoreList.innerHTML = scoreboard
            .map(score => {
                return `<li class="score-list">${score.username} - ${score.score}</li>`;
            })
            .join("");
    } else {
        scoreboard.push(score);
        // To sort scores in order from the highest at the top to the lowest at the bottom
        scoreboard.sort((a, b) => b.score - a.score);
        // Keeps the top 5 scores by removing the lowest ones from the array
        scoreboard.splice(5);
        // To convert into a string
        localStorage.setItem('scoreboard', JSON.stringify((scoreboard)));
        showScoreList.innerHTML = scoreboard
            // Map method to convert array and return a string of <li> elements (username and score in it)
            .map(score => {
                // Add a class to decorate the <li> with CSS
                return `<li class="score-list">${score.username} - ${score.score}</li>`;
            })
            // To return a new string
            .join("");
    }
}