var canvas = null
var context = null // =null 넣는건 좋은 코딩습관

class GameObject{
  constructor(src) {
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.image = new Image()

    this.image.src = src
    this.image.addEventListener('load', this.onImageLoad)
  }
  // 문제점 있는 코드들!
  onImageLoad(){
    this.width = this.image.width
    this.height = this.image.height
  }
}

var objectList = []
var ballList = []
var brickList = []




var clicked = false

function init(){
 canvas = document.getElementById('gameCanvas')
 context = canvas.getContext('2d')

 create('ball', 240, 200)
 create('brick', 200, 50)

 requestAnimationFrame(update)
}

//class GameObject {
// contructor(img){
//   this.x =0;
//   this.y =0;
//   this.width = 0;
//   this.height =0;
//   this.image.
// }
// }
function create(id, x, y) {
  var obj;
  switch (id) {
    case 'ball': obj = new GameObject('Quick_Ball.png')
    ballList.push(obj)
    break;
    case 'brick': obj = new GameObject('Brick_Block.png')
    brickList.push(obj)
      break;
    default:
      console.error('id not found')
      return null
  }
  obj.x = x
  obj.y = y
  objectList.push(obj)
  return obj
}
 function update() {
  context.clearRect(0,0,canvas.width, canvas.height) //사진 초기화

  for(o of objectList){
    context.drawImage(o.image, o.x, o.y)
  }

  if(clicked) {
    ball.y -= 5
  }

  //AABB 충돌
  for (ball of ballList) {
    for (brick of brickList){
      if(brick.x + brick.width > ball.x &&
         brick.x < ball.x+ball.width &&
          brick.y + brick.height > ball.y &&
          brick.y < ball.y + ball.height)
          return;
    }
  requestAnimationFrame(update)
}


function onClick() {
  clicked = true
}

window.addEventListener('load', init);
window.addEventListener('click',onClick)
