//addEventlistener("type", fucntion)

window.addEventListener("load", onLoad);

function onLoad() {
  var canvas = document.getElementById('gameCanvas')
  var context = canvas.getContext('2d') // 캔바스의 2d,3d 설정문 3d는 webgl이해 필요

  context.fillStyle = "#000"
  //fillRect(x,y,width,height) //사각형
  //context.fillRect(40,50,100,40);

  //context.moveTo(100,11) //선
  //context.lineTo(50,50)
  //context.stroke();

  // context.beginPath()
  // //(center X, center Y, radius(크기) , 시작각도, 끝 각도)
  // context.arc(60, 60, 50, 0, Math.PI * 2)
  // context.stroke();

  context.font = "30px Arial"
  context.strokeText("UMR", 10, 100) //채우는 건 fillText
}
