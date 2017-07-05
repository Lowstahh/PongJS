/*
Important Constants: Screen width, height, canvas, context, Paddle X, CPU X
*/

/*
Variables:  Paddle Y, Ball X, Ball Y, Ball Speed, CPU Y, CPU Speed?, Player Score, CPU Score
*/

var playerPaddle
var cpuPaddle
var gameBall

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 500
    this.canvas.height = 300
    this.context = this.canvas.getContext('2d')
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
  }
}
startGame()
function startGame () {
  myGameArea.start()
  playerPaddle = new paddle (15, 60, 'black', 10, 120)
  cpuPaddle = new paddle (15, 60, 'black', 480, 120)
  gameBall = new ball (250, 150, 10, 'black')
}

function ball (x, y, r, color) {
  var ctx = myGameArea.context
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
  ctx.stroke()
}
function paddle (width, height, color, x, y) {
  this.width = width
  this.height = height
  this.x = x
  this.y = y
  var ctx = myGameArea.context
  ctx.fillStyle = color
  ctx.fillRect(this.x, this.y, this.width, this.height)
}
