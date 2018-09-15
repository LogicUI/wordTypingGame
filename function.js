function init(){
    refresh();
    wordInput.addEventListener("input",startMatch);
    wordInput.focus(); //will automatically 
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

// check if input parameter matches the current word displayed
function matchWords(){
    message.textContent = wordInput.value === currentWord.textContent ? "correct" : ""
    return Boolean(message.textContent); // change output to falsy value 

}

function countdown(){
    if(time > 0){
        time--;
    }
    else{
        isPlaying = false;
    }
    timeDisplay.textContent = time;
    checkStatus();
}

function checkStatus(){
    if(!isPlaying && time === 0){
        displayEndGame();
    }
}

function refresh(){
    wordInput.readOnly = false;
    message.textContent = "";
    wordInput.value = "";
    seconds.textContent = currentLevel;
    time = currentLevel; // for refreshing the page 
    timeDisplay.textContent = time;
    score = 0;
    scoreDisplay.textContent = score;
    resetInterval();
    showWord(words);
}

function resetInterval(){
    clearInterval(idleInterval);
    idleInterval = setInterval(countdown,1000);
}


function displayEndGame(){
    setNewHighScore();
    message.textContent = `Game Over, Your Highest score was ${getNewScore()} click start to try again`;
    wordInput.readOnly = true;
    scoreDisplay.textContent = 0;
}

function goNextStage(){
    score++;
    increaseLevel();
    isPlaying = true;
    showWord(words);
    wordInput.value = "";
    scoreDisplay.textContent = score;
}

function increaseLevel(){
    time = score >= 10? levels.hard : score >=5 ? levels.medium : currentLevel;
    seconds.textContent = time;
    timeDisplay.textContent = time;
}

function setNewHighScore(){
    if(score > getNewScore()){
        localStorage.setItem("bestscore",score);
    }
}

function getNewScore(){
    const getCurrentScore = localStorage.getItem("bestscore");
    if(!getCurrentScore){
        localStorage.setItem("bestscore",0);
        return 0;
    }
    return getCurrentScore;
}