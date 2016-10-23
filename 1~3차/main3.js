//
var image = new Image()

image.src= "게이.jpg"
var eventType, keyCode;
var playerX =10, playerY =10;
var mouseX,mouseY
var isDrag = false;
// setInterval 예 : 5초때 마다 뭐를 만든다 할때
window.requestAnimationFrame(); // 예전엔 setTimeout(myFunction, 3000)

image.addEventListener("load", render);
window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

window.addEventListener('mousedown', onMouseDown)
window.addEventListener('mouseup', onMouseUp)
window.addEventListener('mousemove', onMouseMove)
//window.addEventListener('click', onClick)
window.addEventListener('dblclick', onDblClick)

//window.addEventListener('contextmenu', onContextMenu)
function render() {
  var canvas = document.getElementById('gameCanvas')
  var context = canvas.getContext('2d')
  canvas.width = 1000;
  canvas.height = 500;
  context.fillStyle = '#666'
  context.font = '13px Arial'
  context.textBaseline = 'top'
  context.fillText('Keycode is :' +keyCode, 10, 10)
  context.fillText('Event Type is  is :' +eventType, 10, 25)

  context.drawImage(image, playerX,playerY);
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

  render()
}

function onKeyUp(e) {
  keyCode = e.keyCode
  eventType = e.type
  render()
}

function onMouseDown(e) {
  eventType = e.type
  mouseX = e.clientX
  mouseY = e.clientY

  isDrag= true;
  render()
}
function onMouseUp(e) {
  eventType = e.type
  mouseX = e.clientX
  mouseY = e.clientY

  isDrag= false;
  render()
}
function onMouseMove(e) {
  eventType = e.type
if(isDrag){
  playerX = mouseX
  playerY = mouseY
}
  render()
}
