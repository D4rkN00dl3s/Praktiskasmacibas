document.addEventListener('DOMContentLoaded', function() {
    const questionNumberID = 'QuestionNumber';
    const questionID = 'Question';
    const answerID = 'Answers';
    const currentScoreID = 'currentScore';
    const restartButtonID = 'restartButton';
    const answerA = document.getElementById('answerA');
    const answerB = document.getElementById('answerB');
    const answerC = document.getElementById('answerC');
    const answerD = document.getElementById('answerD');
    const restartButton = document.getElementById('restartButton');
    const previousScoreElement = document.getElementById('previousScore');

    // Retrieve previous score from localStorage
    const previousScore = localStorage.getItem('previousScore') || 0;
    previousScoreElement.textContent = `Previous Score: ${previousScore}`;

    answerA.addEventListener('click', function() { buttonPressed(1, questionNumberID, questionID, answerID, currentScoreID, restartButtonID); });
    answerB.addEventListener('click', function() { buttonPressed(2, questionNumberID, questionID, answerID, currentScoreID, restartButtonID); });
    answerC.addEventListener('click', function() { buttonPressed(3, questionNumberID, questionID, answerID, currentScoreID, restartButtonID); });
    answerD.addEventListener('click', function() { buttonPressed(4, questionNumberID, questionID, answerID, currentScoreID, restartButtonID); });
    restartButton.addEventListener('click', restartQuiz);

    goToQuestion1(questionNumberID, questionID, answerID);
});

var answer = null;
var currentQuestionNumber = 1;
var currentScoreValue = 0;
var totalQuestions = 10;

function buttonPressed(answerIndex, questionNumberID, questionID, answerID, currentScoreID, restartButtonID) {
    answer = answerIndex;
    if (currentQuestionNumber <= totalQuestions) {
        updateScore(currentScoreID);
        currentQuestionNumber++;
        if (currentQuestionNumber > totalQuestions) {
            showCompletionMessage(currentScoreID, restartButtonID);
        } else {
            goToNextQuestion(questionNumberID, questionID, answerID);
        }
    }
}

function goToNextQuestion(questionNumberID, questionID, answerID) {
    switch (currentQuestionNumber) {
        case 1:
            goToQuestion1(questionNumberID, questionID, answerID);
            break;
        case 2:
            goToQuestion2(questionNumberID, questionID, answerID);
            break;
        case 3:
            goToQuestion3(questionNumberID, questionID, answerID);
            break;
        case 4:
            goToQuestion4(questionNumberID, questionID, answerID);
            break;
        case 5:
            goToQuestion5(questionNumberID, questionID, answerID);
            break;
        case 6:
            goToQuestion6(questionNumberID, questionID, answerID);
            break;
        case 7:
            goToQuestion7(questionNumberID, questionID, answerID);
            break;
        case 8:
            goToQuestion8(questionNumberID, questionID, answerID);
            break;
        case 9:
            goToQuestion9(questionNumberID, questionID, answerID);
            break;
        case 10:
            goToQuestion10(questionNumberID, questionID, answerID);
            break;
        default:
            break;
    }
}

function updateScore(currentScoreID) {
    var correctAnswer;
    switch (currentQuestionNumber) {
        case 1:
            correctAnswer = 3;
            break;
        case 2:
            correctAnswer = 2;
            break;
        case 3:
            correctAnswer = 1;
            break;
        case 4:
            correctAnswer = 4;
            break;
        case 5:
            correctAnswer = 1;
            break;
        case 6:
            correctAnswer = 3;
            break;
        case 7:
            correctAnswer = 4;
            break;
        case 8:
            correctAnswer = 1;
            break;
        case 9:
            correctAnswer = 1;
            break;
        case 10:
            correctAnswer = 4;
            break;
        default:
            break;
    }
    if (answer === correctAnswer) {
        currentScoreValue++;
    }
    var currentScore = document.getElementById(currentScoreID);
    currentScore.textContent = `Current Score: ${currentScoreValue}`;
}

function showCompletionMessage(currentScoreID, restartButtonID) {
    var completionMessage = document.getElementById("QuestionNumber");
    completionMessage.textContent = "Congratulations! Quiz Completed.";
    var completionPercentage = (currentScoreValue / totalQuestions) * 100;
    var scoreMessage = `Your Score: ${currentScoreValue} out of ${totalQuestions} (${completionPercentage.toFixed(2)}%)`;
    var questionElement = document.getElementById("Question");
    questionElement.textContent = scoreMessage;

    var restartButton = document.getElementById(restartButtonID);
    restartButton.style.zIndex = 'auto';

    // Hide the answers and answer buttons
    var answerElement = document.getElementById("Answers");
    var answerA = document.getElementById('answerA');
    var answerB = document.getElementById('answerB');
    var answerC = document.getElementById('answerC');
    var answerD = document.getElementById('answerD');
    answerElement.style.display = 'none';
    answerA.style.display = 'none';
    answerB.style.display = 'none';
    answerC.style.display = 'none';
    answerD.style.display = 'none';
}

function restartQuiz() {
    answer = null;
    currentQuestionNumber = 1;
    // Save the current score to localStorage
    localStorage.setItem('previousScore', currentScoreValue);
    currentScoreValue = 0;
    var questionNumberID = 'QuestionNumber';
    var questionID = 'Question';
    var answerID = 'Answers';
    goToQuestion1(questionNumberID, questionID, answerID);
    var currentScore = document.getElementById('currentScore');
    currentScore.textContent = `Current Score: ${currentScoreValue}`;

    // Retrieve previous score from localStorage and update the display
    const previousScore = localStorage.getItem('previousScore') || 0;
    var previousScoreElement = document.getElementById('previousScore');
    previousScoreElement.textContent = `Previous Score: ${previousScore}`;

    // Show the answers and answer buttons again
    var answerElement = document.getElementById("Answers");
    var answerA = document.getElementById('answerA');
    var answerB = document.getElementById('answerB');
    var answerC = document.getElementById('answerC');
    var answerD = document.getElementById('answerD');
    answerElement.style.display = 'block';
    answerA.style.display = 'table';
    answerB.style.display = 'table';
    answerC.style.display = 'table';
    answerD.style.display = 'table';
}

function setQuestion(questionNumberID, questionID, answerID, questionNumberText, questionText, answerText) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = questionNumberText;
    question.textContent = questionText;
    answer.innerHTML = answerText;
}

function goToQuestion1(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №1:', 'What is the largest planet in our solar system?', 'A. Earth<br>B. Mars<br>C. Jupiter<br>D. Saturn');
}

function goToQuestion2(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №2:', 'Which planet is known for its prominent ring system?', 'A. Venus<br>B. Saturn<br>C. Neptune<br>D. Uranus');
}

function goToQuestion3(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №3:', 'What is the smallest planet in our solar system?', 'A. Mercury<br>B. Mars<br>C. Venus<br>D. Pluto');
}

function goToQuestion4(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №4:', 'Which planet is closest to the Sun?', 'A. Earth<br>B. Venus<br>C. Mars<br>D. Mercury');
}

function goToQuestion5(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №5:', 'Which planet is known as the Red Planet?', 'A. Mars<br>B. Jupiter<br>C. Saturn<br>D. Venus');
}

function goToQuestion6(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №6:', 'Which dwarf planet is located in the Kuiper Belt?', 'A. Ceres<br>B. Eris<br>C. Pluto<br>D. Haumea');
}

function goToQuestion7(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №7:', 'Which planet has the most moons?', 'A. Earth<br>B. Mars<br>C. Jupiter<br>D. Saturn');
}

function goToQuestion8(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №8:', 'What is the name of the second largest moon in our solar system, which orbits Saturn?', 'A. Titan<br>B. Ganymede<br>C. Callisto<br>D. Europa');
}

function goToQuestion9(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №9:', 'Which planet has a day longer than its year?', 'A. Venus<br>B. Mercury<br>C. Mars<br>D. Neptune');
}

function goToQuestion10(questionNumberID, questionID, answerID) {
    setQuestion(questionNumberID, questionID, answerID, 'Question №10:', 'Which of the following is NOT a terrestrial planet?', 'A. Mercury<br>B. Venus<br>C. Earth<br>D. Jupiter');
}