var answer;
var currentQuestionNumber = 1;
var currentScoreValue = 0;

function AButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 1;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 2) goToQuestion3(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 3) goToQuestion4(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 4) goToQuestion5(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 5) goToQuestion6(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 6) goToQuestion7(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 7) goToQuestion8(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 8) goToQuestion9(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 9) goToQuestion10(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function BButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 2;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 2) goToQuestion3(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 3) goToQuestion4(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 4) goToQuestion5(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 5) goToQuestion6(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 6) goToQuestion7(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 7) goToQuestion8(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 8) goToQuestion9(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 9) goToQuestion10(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function CButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 3;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 2) goToQuestion3(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 3) goToQuestion4(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 4) goToQuestion5(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 5) goToQuestion6(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 6) goToQuestion7(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 7) goToQuestion8(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 8) goToQuestion9(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 9) goToQuestion10(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function DButtonPressed(questionNumberID, questionID, answerID, currentScoreID) {
    answer = 4;
    if (currentQuestionNumber == 1) goToQuestion2(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 2) goToQuestion3(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 3) goToQuestion4(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 4) goToQuestion5(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 5) goToQuestion6(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 6) goToQuestion7(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 7) goToQuestion8(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 8) goToQuestion9(questionNumberID, questionID, answerID);
    if (currentQuestionNumber == 9) goToQuestion10(questionNumberID, questionID, answerID);
    updateScore(currentScoreID);
    currentQuestionNumber++;
}

function restartButtonPressed(questionNumberID, questionID, answerID, currentScoreID, previousScoreID) {
    answer = null;
    currentQuestionNumber = 1;
    goToQuestion1(questionNumberID, questionID, answerID);
    var previousScore = document.getElementById(previousScoreID);
    previousScore.textContent = `Previous Score: ${currentScoreValue}`;
    currentScoreValue = 0;
    var currentScore = document.getElementById(currentScoreID);
    currentScore.textContent = `Current Score: ${currentScoreValue}`;
}

function goToQuestion1(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №1:';
    question.textContent = 'What is the largest planet in our solar system?';
    answer.innerHTML = 'Possible answers:<br>A. Earth<br>B. Mars<br>C. Jupiter<br>D. Saturn';
}

function goToQuestion2(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №2:';
    question.textContent = 'Which planet is known for its prominent ring system?';
    answer.innerHTML = 'Possible answers:<br>A. Venus<br>B. Saturn<br>C. Neptune<br>D. Uranus';
}

function goToQuestion3(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №3:';
    question.textContent = 'What is the smallest planet in our solar system?';
    answer.innerHTML = 'Possible answers:<br>A. Mercury<br>B. Mars<br>C. Venus<br>D. Pluto';
}

function goToQuestion4(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №4:';
    question.textContent = 'Which planet is closest to the Sun?';
    answer.innerHTML = 'Possible answers:<br>A. Earth<br>B. Venus<br>C. Mars<br>D. Mercury';
}

function goToQuestion5(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №5:';
    question.textContent = 'Which planet is known as the Red Planet?';
    answer.innerHTML = 'Possible answers:<br>A. Mars<br>B. Jupiter<br>C. Saturn<br>D. Venus';
}

function goToQuestion6(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №6:';
    question.textContent = 'Which dwarf planet is located in the Kuiper Belt?';
    answer.innerHTML = 'Possible answers:<br>A. Ceres<br>B. Eris<br>C. Pluto<br>D. Haumea';
}

function goToQuestion7(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №7:';
    question.textContent = 'Which planet has the most moons?';
    answer.innerHTML = 'Possible answers:<br>A. Earth<br>B. Mars<br>C. Jupiter<br>D. Saturn';
}

function goToQuestion8(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №8:';
    question.textContent = 'What is the name of the second largest moon in our solar system, which orbits Saturn?';
    answer.innerHTML = 'Possible answers:<br>A. Titan<br>B. Ganymede<br>C. Callisto<br>D. Europa';
}

function goToQuestion9(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №9:';
    question.textContent = 'Which planet has a day longer than its year?';
    answer.innerHTML = 'Possible answers:<br>A. Venus<br>B. Mercury<br>C. Mars<br>D. Neptune';
}

function goToQuestion10(questionNumberID, questionID, answerID) {
    var questionNumber = document.getElementById(questionNumberID);
    var question = document.getElementById(questionID);
    var answer = document.getElementById(answerID);

    questionNumber.textContent = 'Question №10:';
    question.textContent = 'Which of the following is NOT a terrestrial planet?';
    answer.innerHTML = 'Possible answers:<br>A. Mercury<br>B. Venus<br>C. Earth<br>D. Jupiter';
}

function updateScore(currentScoreID) {
    if(currentQuestionNumber == 1 && answer == 3) currentScoreValue++;
    if(currentQuestionNumber == 2 && answer == 2) currentScoreValue++;
    if(currentQuestionNumber == 3 && answer == 1) currentScoreValue++;
    if(currentQuestionNumber == 4 && answer == 4) currentScoreValue++;
    if(currentQuestionNumber == 5 && answer == 1) currentScoreValue++;
    if(currentQuestionNumber == 6 && answer == 3) currentScoreValue++;
    if(currentQuestionNumber == 7 && answer == 4) currentScoreValue++;
    if(currentQuestionNumber == 8 && answer == 1) currentScoreValue++;
    if(currentQuestionNumber == 9 && answer == 1) currentScoreValue++;
    if(currentQuestionNumber == 10 && answer == 4) currentScoreValue++;
    var currentScore = document.getElementById(currentScoreID);
    currentScore.textContent = `Current Score: ${currentScoreValue}`;
}