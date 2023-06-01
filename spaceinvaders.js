let canvas = document.getElementById('myCanvas');
  /** @type {CanvasRenderingContext2D}  */
let ctx = canvas.getContext("2d");


(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  var cancvelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();
var animationID;

// image sprites
let spriteBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAACGUlEQVR42u3aSQ7CMBAEQIsn8P+/hiviAAK8zFIt5QbELiTHmfEYE3L9mZE9AAAAqAVwBQ8AAAD6THY5CgAAAKbfbPX3AQAAYBEEAADAuZrC6UUyfMEEAIBiAN8OePXnAQAAsLcmmKFPAQAAgHMbm+gbr3Sdo/LtcAAAANR6GywPAgBAM4D2JXAAABoBzBjA7AmlOx8AAEAzAOcDAADovTc4vQim6wUCABAYQG8QAADd4dPd2fRVYQAAANQG0B4HAABAawDnAwAA6AXgfAAAALpA2uMAAABwPgAAgPoAM9Ci/R4AAAD2dmqcEQIAIC/AiQGuAAYAAECcRS/a/cJXkUf2AAAAoBaA3iAAALrD+gIAAADY9baX/nwAAADNADwFAADo9YK0e5FMX/UFACA5QPSNEAAAAHKtCekmDAAAAADvBljtfgAAAGgMMGOrunvCy2uCAAAACFU6BwAAwF6AGQPa/XsAAADYB+B8AAAAtU+ItD4OAwAAAFVhAACaA0T7B44/BQAAANALwGMQAAAAADYO8If2+P31AgAAQN0SWbhFDwCAZlXgaO1xAAAA1FngnA8AACAeQPSNEAAAAM4CnC64AAAA4GzN4N9NSfgKEAAAAACszO26X8/X6BYAAAD0Anid8KcLAAAAAAAAAJBnwNEvAAAA9Jns1ygAAAAAAAAAAAAAAAAAAABAQ4COCENERERERERERBrnAa1sJuUVr3rsAAAAAElFTkSuQmCC";
const tank = new Image();
tank.src = spriteBase64;
const invader = new Image();
invader.src = spriteBase64;
var startScreenTimeout;
//  tank et sprite

var frameCount=0;
var armyPrevFrameCount=0;
var framesInOneSec = 1000/16;
var spritUnitHeight = 35;
var spriteUnitWidth = 64;
var scoreBarHeight = 50;
var tank__bottomOffset = (spritUnitHeight/2) + scoreBarHeight;
var tankX=canvas.width/2;
var tankdX = 4;
var tankY=canvas.height-(tank__bottomOffset);
var tankWidth= spriteUnitWidth/2;
var tankHeight =spritUnitHeight/2
var keys =[];

// score et vies
var score = 0;
var allowedLives = 3;
var lives = allowedLives;
var hasLifeDecreased = false;
var gameRunning = false;

// Invaders
var invaderWidth = spriteUnitWidth/2.5;
var invaderHeight = spritUnitHeight/2.5;
var invaderSpriteHeight = spritUnitHeight;
var invaderSpriteHeigthsArray = [[68,102],[102,134],[102,134],[0,34],[0,34]];
var spriteSelector =0
var armyRows = 5;
var armyColumns = 10;
var armyX = 60;
var armyY = 60;
var invaderLeftOffset = 15;
var invaderTopOffset = 20;
var armyDirection = "right";
var armyDx = 10;
var armyDy = 10;
var armySpeed = 40;
var armySpeed_decrement = 10;
let aliveInvaders = armyColumns* armyRows;
var armyInvaderBulletSpeed = 4;
var armyArray = [];
// Tire (balles)
var bullet__height = 10;
var bullet__width = 3;
var tankBullet__x;
var tankBullet__y;
var shouldMoveTankBullet = false;
var tankBullet__dy = 10;

var invaderBulletArray = []
var invBullet_dy = 5;
var invBullet__prevFrameCount=0;

// explosion 
const background = '#FFF';
var particlesPerExplosion =50;
const particlesMinSpeed = 1;
const particlesMaxSpeed = 6;
const particlesMinSize = 1;
var particlesMaxSize = 8;
const explosions= []; 
var explosionColor = 'red';
let fps        = 60;
const interval = 1000 / fps;

let now, delta;
let then = Date.now();

// boucle principal du jeu 
window.addEventListener('load' , function() {
  drawStartScreen();
})
function startGame(){
  clearInterval(startScreenTimeout);
  gameRunning=true;
  gameInit();
  construcArmy(armyX,armyY);
  gameLoop();
  
}

function gameInit(){
  invaderBulletArray =[];
  armyArray  = [];
  score = 0;
  lives = allowedLives;
  armyDirection = "right";
  aliveInvaders = armyColumns* armyRows;
  framecount= 0;
  armyPrevFrameCount=0;
  invBullet_prevFramecount= 0;
  hasLifeDecreased= false;
  armySpeed = 40;
}
  
  













