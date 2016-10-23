var canvas = null;
var context = null;

class GameObject {
  constructor(src) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.image = new Image();
    this.image.addEventListener('load', () => {
      this.width = this.image.width;
      this.height = this.image.height;
    });
    this.image.src = src;
  }
}

class Ball extends GameObject {
  constructor() {
    super('Quick_Ball.png');

    this.speed = {x:0.1, y:-5}
  }
}

var clicked = false;


var gameObjectList = [];
var ballList = [];
var brickList = [];

function init() {
  canvas = document.getElementById('gameCanvas');
  context = canvas.getContext('2d');

  create('brick', 200, 50);
  create('ball', 240, 200);
  create('brick', 200, 400);

  requestAnimationFrame(update);
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let o of gameObjectList) {
    context.drawImage(o.image, o.x, o.y);
  }


  for (let ball of ballList) {
    for (let brick of brickList) {
      //AABB 충돌
  if(brick.x + brick.width > ball.x &&
  brick.x < ball.x + ball.width &&
  brick.y + brick.height > ball.y &&
  brick.y < ball.y + ball.height
  ) {
  ball.x -= ball.speed.x;
  ball.y -= ball.speed.y;}
  if(brick.x + brick.width > ball.x &&
  brick.x < ball.x + ball.width)
  {
  ball.speed.y *= -1;
  }
  else if(brick.y + brick.height > ball.y &&
  brick.y < ball.y + ball.height)
  {
  ball.speed.x *= -1;
  }


    if(clicked){
      ball.x += ball.speed.x;
      ball.y += ball.speed.y;
    }

  if (ball.x <0 && ball.x + ball.width > canvas.width)
    ball.speed.x *= -1;
  if (ball.y<0)
    ball.speed.y *= -1;

  }

  requestAnimationFrame(update);
}

function create(id, x, y) {
  let ret;

  switch (id) {
    case 'brick':
      ret = new GameObject('Brick_Block.png');
      brickList.push(ret);
      break;
    case 'ball':
      ret = new Ball()
      ballList.push(ret);
      break;
    default:
      return null;
  }

  ret.x = x;
  ret.y = y;
  gameObjectList.push(ret);

  return ret;
}

function onClick() {
  clicked = true;
}

window.addEventListener('click', onClick);
window.addEventListener('load', init);
