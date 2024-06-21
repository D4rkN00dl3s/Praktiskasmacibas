var answer;
var currentQuestionNumber = 1;
var currentScoreValue = 0;
var previousScore = 0;

function AButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 1;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function BButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 2;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function CButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 3;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function DButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 4;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function goToQuestion2(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №2:';
    question.textContent = 'Which planet is known for its prominent ring system?';
    answer.innerHTML = 'Possible answers:<br>A. Venus<br>B. Saturn<br>C. Neptune<br>D. Uranus';
}
function updateScore(currentScoreID) {
    if(currentQuestionNumber == 1 && answer == 3) currentScoreValue++;
    var currentScore = document.getElementById(currentScoreID);
    currentScore.textContent = `Current Score: ${currentScoreValue}`;
}