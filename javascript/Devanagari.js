const hiraganaDiv = document.querySelector('.hiragana');
const placeholderText = document.querySelector('.placeholder-text');
const inputField = document.querySelector('.input-field');
const startButton = document.getElementById('start-button');
const hindiChars = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'];
const romajiChars = ['a', 'aa', 'i', 'ii', 'u', 'uu', 'ri', 'e', 'ai', 'o', 'au', 'am', 'ah', 'ka', 'kha', 'ga', 'gha', 'nga', 'cha', 'chha', 'ja', 'jha', 'nya', 'ta', 'tha', 'da', 'dha', 'na', 'ta', 'tha', 'da', 'dha', 'na', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'la', 'va', 'sha', 'sha', 'sa', 'ha'];

let currentCharIndex = 0;
let startTime;
let totalTime = 0;
let totalCorrect = 0;
let totalAttempts = 0;
let gameEnded = false;
let lastIncorrectAnswer = '';

function startGame() {
    currentCharIndex = 0;
    totalTime = 0;
    totalCorrect = 0;
    totalAttempts = 0;
    gameEnded = false;
    lastIncorrectAnswer = '';
    placeholderText.textContent = '';
    nextCharacter();
}

function nextCharacter() {
    if (currentCharIndex < hindiChars.length && !gameEnded) {
        currentChar = hindiChars[currentCharIndex];
        hiraganaDiv.textContent = currentChar;
        inputField.value = '';
        inputField.style.display = 'block';
        startButton.style.display = 'none';
        placeholderText.textContent = '';
        startTime = Date.now();
        changeColorOverTime();
    } else {
        endGame();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkInput();
    }
}

function checkInput() {
    const userInput = inputField.value.trim().toLowerCase();
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    totalTime += timeTaken;
    totalAttempts++;
    if (userInput === romajiChars[currentCharIndex]) {
        placeholderText.textContent = 'Correct!';
        placeholderText.style.color = 'green';
        totalCorrect++;
        lastIncorrectAnswer = '';
    } else {
        placeholderText.textContent = 'Missed!';
        placeholderText.style.color = 'red';
        lastIncorrectAnswer = `${hindiChars[currentCharIndex]} is ${romajiChars[currentCharIndex]}`;
    }
    currentCharIndex++;
    nextCharacter();
}

function endGame() {
    gameEnded = true;
    inputField.style.display = 'none';
    startButton.style.display = 'block';
    const averageTime = totalTime / totalAttempts;
    const scoreText = `Score: ${totalCorrect}/${totalAttempts}, Avg Time: `;
    const timeText = `<span style="color: ${getColorForTime(averageTime)}">${averageTime.toFixed(2)}s</span>`;
    const lastAnswerText = lastIncorrectAnswer ? `<span style="color: white"> and</span><span style="color: #ef5350"> ${lastIncorrectAnswer}</span>` : '';

    placeholderText.innerHTML = `${scoreText}${timeText}${lastAnswerText}`;
    placeholderText.style.color = 'white'; // Ensure the base text color is white
}

function getColorForTime(averageTime) {
    if (averageTime <= 2) {
        return '#a0d468'; // Softer green
    } else if (averageTime <= 5) {
        return '#ffeb3b'; // Softer yellow
    } else {
        return '#ef5350'; // Softer red
    }
}

function changeColorOverTime() {
    const interval = setInterval(() => {
        if (gameEnded) {
            clearInterval(interval);
            return;
        }

        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;

        if (elapsedTime <= 3) {
            hiraganaDiv.style.color = '#a0d468';
            hiraganaDiv.style.animation = 'colorGreen 1s forwards';
        } else if (elapsedTime <= 5) {
            hiraganaDiv.style.color = '#ffeb3b';
            hiraganaDiv.style.animation = 'colorYellow 1s forwards';
        } else {
            hiraganaDiv.style.color = '#ef5350';
            hiraganaDiv.style.animation = 'colorRed 1s forwards';
        }

        if (elapsedTime > 7) {
            // Force end game
            totalTime += 7; // Add the 7 seconds for the missed time
            totalAttempts++;
            if (lastIncorrectAnswer === '') {
                lastIncorrectAnswer = `${hindiChars[currentCharIndex]} is ${romajiChars[currentCharIndex]}`;
            }
            endGame();
            clearInterval(interval);
        }

        if (inputField.style.display === 'none') {
            clearInterval(interval);
        }
    }, 100);
}
