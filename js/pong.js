/*
Important Constants: Screen width, height, canvas, context, Paddle X, CPU X
*/

/*
Variables:  Paddle Y, Ball X, Ball Y, Ball Speed, CPU Y, CPU Speed?, Player Score, CPU Score
*/

var playerPaddle
var cpuPaddle

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = window.innerWidth
    this.canvas.height = 270
    this.context = this.canvas.getContext('2d')
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
  }
}
startGame()
function startGame () {
  myGameArea.start()
}
