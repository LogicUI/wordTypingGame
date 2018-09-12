//global variables 

const levels={
    easy:5,
    medium:3,
    hard:2
};

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];
//levels
let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;
let stopped;
let idleInterval;


const wordInput = document.querySelector("#word-input");
const seconds = document.querySelector("#seconds");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

