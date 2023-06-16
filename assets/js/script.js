/**
 * Buttons to access its containers
 * Variables
 */
const startButton = document.getElementById("start-btn");
const instructionsButton = document.getElementById("instructions-btn");
const closeInstructionsButton = document.getElementById("close-instructions-btn");
const backToIndexButton = document.getElementById("back-to-index-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextQuestionButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Difficulty menu selection
const easyButton = document.getElementById('easy-btn');
const mediumButton = document.getElementById('medium-btn');
const hardButton = document.getElementById('hard-btn');


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


    /**
 * This function will reset answers from previous questions
 * 
 */
    function resetEasyState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
            console.log("previous answers cleared");
        }
    }


    /**
     * This function will show questions and its answers
     */

    function showEasyQuestion() {
        resetEasyState();
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
            if (answer.correct) {
                answerButton.dataset.correct = answer.correct;
            }
            // This Event Listener is to select an answer
            answerButton.addEventListener('click', selectEasyAnswer);
        });
    };


    /**
     * This function will activate as soon as the User selects an answer
     */
    function selectEasyAnswer(event) {
        console.log("answer selected");
        const selectedAnswerButton = event.target;
        const correctAnswer = selectedAnswerButton.dataset.correct === "true";
        /**
         * The answer will be checked whether is correct or wrong
         * Also class has been added to decorate/style the correct and wrong answers
         **/
        if (correctAnswer) {
            console.log("its correct");
            selectedAnswerButton.classList.add("correct-answer");
            score++;
        } else {
            console.log("its wrong");
            selectedAnswerButton.classList.add("wrong-answer");
        }
        // Soon as the answer is selected whether is correct or wrong, all answers will be locked.
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct-answer");
            }
            button.disabled = true;
            console.log("answers locked");
        });
        // Once the answer is selected and locked, the Next button will be displayed
        nextQuestionButton.style.display = "block";
    }


    /**
     * This function will show the user score at the end of the quiz.
     * A text message has been added to congratulate the user.
     */
    function showScore() {
        resetEasyState();
        questionElement.innerHTML = `Well done in completing the quiz!` +
            `<br> You have scored ${score} out of ${easyQuestions.length} questions!`;
        // This will hide the next question button
        nextQuestionButton.style.display = 'none';
        // This will display Main Menu button
        backToIndexButton.style.display = 'block';
    }


    /**
     * This function adds next question so the user can carry on with the quiz
     * Next question Data will be loaded from game.js file
     */
    function handleNextQuestionButton() {
        // This will hide the next question button
        nextQuestionButton.style.display = 'none';
        currentQuestionIndex++;
        if (currentQuestionIndex < easyQuestions.length) {
            showEasyQuestion();
            console.log("next question shown");
        } else {
            showScore();
        }
    }


    /**
     * This Event Listener is to active the next button
     * By pressing it you will be taken to next question
     */
    nextQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex < easyQuestions.length) {
            console.log("next button pressed");
            handleNextQuestionButton();
        } else {
            selectEasyQuiz();
        }
    });
}


// Event Listener will open and start Medium mode quiz
mediumButton.addEventListener('click', selectMediumQuiz);

// This fucntion will select Medium mode and start it
function selectMediumQuiz() {
    console.log('you have selected medium mode');
    difficultyContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    showMediumQuestion()


    /**
 * This function will reset answers from previous questions
 * 
 */
    function resetMediumState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
            console.log("previous answers cleared");
        }
    }


    /**
     * This function will show questions and its answers
     */

    function showMediumQuestion() {
        resetMediumState();
        console.log("show medium question");
        /**
         * This function will show current question
         * Data for the questions will be collected from game.js file
         */
        let currentMediumQuestion = mediumQuestions[currentQuestionIndex];
        questionElement.innerHTML = currentMediumQuestion.question;
        /**
         * This function is to show answers of the current question
         * It will add a button for each answer of the current question, in this case 4 answers
         * Data for the answers will be collected from game.js file
         */
        currentMediumQuestion.answers.forEach(answer => {
            console.log("answers displayed");
            const answerButton = document.createElement("button");
            answerButton.innerHTML = answer.text;
            answerButton.classList.add("btn");
            answerButtons.appendChild(answerButton);
            if (answer.correct) {
                answerButton.dataset.correct = answer.correct;
            }
            // This Event Listener is to select an answer
            answerButton.addEventListener('click', selectMediumAnswer);
        });
    };


    /**
     * This function will activate as soon as the User selects an answer
     */
    function selectMediumAnswer(event) {
        console.log("answer selected");
        const selectedAnswerButton = event.target;
        const correctAnswer = selectedAnswerButton.dataset.correct === "true";
        /**
         * The answer will be checked whether is correct or wrong
         * Also class has been added to decorate/style the correct and wrong answers
         **/
        if (correctAnswer) {
            console.log("its correct");
            selectedAnswerButton.classList.add("correct-answer");
            score++;
        } else {
            console.log("its wrong");
            selectedAnswerButton.classList.add("wrong-answer");
        }
        // Soon as the answer is selected whether is correct or wrong, all answers will be locked.
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct-answer");
            }
            button.disabled = true;
            console.log("answers locked");
        });
        // Once the answer is selected and locked, the Next button will be displayed
        nextQuestionButton.style.display = "block";
    }


    /**
     * This function will show the user score at the end of the quiz.
     * A text message has been added to congratulate the user.
     */
    function showMediumScore() {
        resetMediumState()
        questionElement.innerHTML = `Well done in completing the quiz!` +
            `<br> You have scored ${score} out of ${mediumQuestions.length} questions!`;
        // This will hide the next question button
        nextQuestionButton.style.display = 'none';
        // This will display Main Menu button
        backToIndexButton.style.display = 'block';
    }


    /**
     * This function adds next question so the user can carry on with the quiz
     * Next question Data will be loaded from game.js file
     */
    function handleNextMediumQuestionButton() {
        // This will hide the next question button
        nextQuestionButton.style.display = 'none';
        currentQuestionIndex++;
        if (currentQuestionIndex < mediumQuestions.length) {
            showMediumQuestion();
            console.log("next question shown");
        } else {
            showMediumScore();
        }
    }


    /**
     * This Event Listener is to active the next button
     * By pressing it you will be taken to next question
     */
    nextQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex < mediumQuestions.length) {
            console.log("next button pressed");
            handleNextMediumQuestionButton();
        } else {
            selectMediumQuiz();
        }
    });

}


// Event Listener will open and start Hard mode quiz
hardButton.addEventListener('click', selectHardQuiz);

// This fucntion will select Hard mode and start it
function selectHardQuiz() {
    console.log('you have selected hard mode');
    difficultyContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    showHardQuestion()


    /**
 * This function will reset answers from previous questions
 * 
 */
    function resetHardState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
            console.log("previous answers cleared");
        }
    }


    /**
     * This function will show questions and its answers
     */

    function showHardQuestion() {
        resetHardState();
        console.log("show hard question");
        /**
         * This function will show current question
         * Data for the questions will be collected from game.js file
         */
        let currentHardQuestion = hardQuestions[currentQuestionIndex];
        questionElement.innerHTML = currentHardQuestion.question;
        /**
         * This function is to show answers of the current question
         * It will add a button for each answer of the current question, in this case 4 answers
         * Data for the answers will be collected from game.js file
         */
        currentHardQuestion.answers.forEach(answer => {
            console.log("answers displayed");
            const answerButton = document.createElement("button");
            answerButton.innerHTML = answer.text;
            answerButton.classList.add("btn");
            answerButtons.appendChild(answerButton);
            if (answer.correct) {
                answerButton.dataset.correct = answer.correct;
            }
            // This Event Listener is to select an answer
            answerButton.addEventListener('click', selectHardAnswer);
        });
    };


    /**
     * This function will activate as soon as the User selects an answer
     */
    function selectHardAnswer(event) {
        console.log("answer selected");
        const selectedAnswerButton = event.target;
        const correctAnswer = selectedAnswerButton.dataset.correct === "true";
        /**
         * The answer will be checked whether is correct or wrong
         * Also class has been added to decorate/style the correct and wrong answers
         **/
        if (correctAnswer) {
            console.log("its correct");
            selectedAnswerButton.classList.add("correct-answer");
            score++;
        } else {
            console.log("its wrong");
            selectedAnswerButton.classList.add("wrong-answer");
        }
        // Soon as the answer is selected whether is correct or wrong, all answers will be locked.
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct-answer");
            }
            button.disabled = true;
            console.log("answers locked");
        });
        // Once the answer is selected and locked, the Next button will be displayed
        nextQuestionButton.style.display = "block";
    }


    /**
     * This function will show the user score at the end of the quiz.
     * A text message has been added to congratulate the user.
     */
    function showHardScore() {
        resetHardState()
        questionElement.innerHTML = `Well done in completing the quiz!` +
            `<br> You have scored ${score} out of ${hardQuestions.length} questions!`;
        // This will hide the next question button
        nextQuestionButton.style.display = 'none';
        // This will display Main Menu button
        backToIndexButton.style.display = 'block';
    }


    /**
     * This function adds next question so the user can carry on with the quiz
     * Next question Data will be loaded from game.js file
     */
    function handleNextHardQuestionButton() {
        // This will hide the next question button
        nextQuestionButton.style.display = 'none';
        currentQuestionIndex++;
        if (currentQuestionIndex < hardQuestions.length) {
            showHardQuestion();
            console.log("next question shown");
        } else {
            showHardScore();
        }
    }


    /**
     * This Event Listener is to active the next button
     * By pressing it you will be taken to next question
     */
    nextQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex < hardQuestions.length) {
            console.log("next button pressed");
            handleNextHardQuestionButton();
        } else {
            selectHardQuiz();
        }
    });

}