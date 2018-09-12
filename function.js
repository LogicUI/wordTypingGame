function init(){
    refresh();
    wordInput.addEventListener("input",startMatch);
    setInterval(checkStatus, 50);
}

function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.textContent = words[randIndex];
}

function startMatch(){
    if(matchWords()){
        goNextStage();
    }
}


function matchWords(){
    if(wordInput.value === currentWord.textContent){
        message.textContent ="correct";
        return true;
    }else{
        message.textContent ="";
        return false;
    }
}

function countdown(){
    if(time > 0){
        time--;
    }
    if(time === 0){
        isPlaying = false;
    }
    timeDisplay.textContent = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        displayEndGame();
    }
}

function refresh(){
    wordInput.readOnly = false;
    resetInputs();
    resetTime();
    resetInterval();
    resetScore();
    showWord(words);
}

function resetInterval(){
    clearInterval(idleInterval);
    idleInterval = setInterval(countdown,1000);
}

function resetInputs(){
    message.textContent="";
    wordInput.value = "";
}
function resetTime(){
    time = currentLevel + 1; // for refreshing the page
    seconds.textContent = currentLevel;
}

function resetScore(){
    score = 0;
    scoreDisplay.textContent = score;
}

function displayEndGame(){
    setNewHighScore();
    message.textContent = `Game Over, Your Highest score was ${getNewScore()} click start to try again`;
    wordInput.readOnly = true;
    scoreDisplay.textContent = 0;
}

function goNextStage(){
    increaseLevel();
    isPlaying = true;
    showWord(words);
    wordInput.value = "";
    score++;
    scoreDisplay.textContent = score;
}

function increaseLevel(){
    time = currentLevel + 1;
    if(score >= 5){
        time = levels.medium + 1; 
        seconds.textContent = time -1;
    }
    if(score >=10){
        time = levels.hard +1;
        seconds.textContent = time -1;
    }
}

function setNewHighScore(){
    if(score > getNewScore()){
        localStorage.setItem("bestscore",score);
    }
    else if(getNewScore() === 0){
        localStorage.setItem("bestscore",score);
    }
}

function getNewScore(){
    var getCurrentScore = localStorage.getItem("bestscore");
    if(getCurrentScore !== null){
        return getCurrentScore;
    }
    return 0;
}