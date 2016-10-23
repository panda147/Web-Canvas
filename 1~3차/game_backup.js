var image = new Image()

image.src= "게이.jpg"

var canvas = null
var context = null // =null 넣는건 좋은 코딩습관

var eventType, keyCode;
var playerX =10, playerY =10;
var keyArr = []

function init(){
 canvas = document.getElementById('gameCanvas')
 context = canvas.getContext('2d')
 requestAnimationFrame(update)

 for(let i =0; i<256; i++)
  keyArr.push(false)
}


function update() {
  context.clearRect(0,0,canvas.width, canvas.height) //사진 초기화
  context.drawImage(image, playerX, playerY);

  if(keyArr[37]){
    playerX -= 10
  }
  else if(keyArr[38]) {
  playerY -= 10 }
  else if(keyArr[39]) {
  playerX += 10 }
  else if(keyArr[40]) {
  playerY += 10 }

  requestAnimationFrame(update)
}
//keyBoardEvent.gg
function onKeyDown(e) {
keyArr[e.keyCode] = true
}

function onKeyUp(e){
  keyArr[e.keyCode] = false
}

window.addEventListener('load', init);
window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

//3차시 때 코드 위와 키를 받는 속도가 다름
/*var image = new Image()

image.src= "게이.jpg"

var canvas = null
var context = null // =null 넣는건 좋은 코딩습관

var eventType, keyCode;
var playerX =10, playerY =10;

function init(){
 canvas = document.getElementById('gameCanvas')
 context = canvas.getContext('2d')
 requestAnimationFrame(update)
}


function update() {
  context.clearRect(0,0,canvas.width, canvas.height) //사진 초기화
  context.drawImage(image, playerX, playerY);

  requestAnimationFrame(update)
}
//keyBoardEvent.gg
function onKeyDown(e) {
  keyCode = e.keyCode
  eventType = e.type

  if(e.keyCode == 37){
    playerX -= 5
  }
  else if(e.keyCode == 38){
  playerY -= 5}
  else if(e.keyCode == 39){
  playerX += 5}
  else if(e.keyCode == 40){
  playerY += 5}

}


window.addEventListener('load', init);
window.addEventListener('keydown', onKeyDown)*/
