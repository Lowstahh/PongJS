var gameBall
var playerPaddle
var AIPaddle
var YSpeed = 1
var XSpeed = 1

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 500
    this.canvas.height = 300
    this.canvas.style = 'border:1px solid #000000;'
    this.context = this.canvas.getContext('2d')
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

initialise()
function initialise () {
  myGameArea.start()
  gameBall = new Ball(250, 150, 10, 'black')
  playerPaddle = new Paddle(0, 120, 15, 60, 'black')
  AIPaddle = new Paddle(485, 120, 15, 60, 'black')
}

function Paddle (x, y, width, height, color) {
  var ctx = myGameArea.context
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.update = function () {
    ctx = myGameArea.context
    ctx.fillStyle = color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
function Ball (x, y, r, color) {
  var ctx = myGameArea.context
  this.x = x
  this.y = y
  this.r = r
  this.update = function () {
    ctx.beginPath()
    ctx.arc(this.x - this.r, this.y - this.r, this.r, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
    ctx.stroke()
  }
}
window.setInterval(updateGameArea, 20)
function updateGameArea () {
  myGameArea.clear()
  gameBall.x += XSpeed
  gameBall.y += YSpeed
  // check for collisions on Y Axis
  checkYCollisions(gameBall, myGameArea)
  // handleInput()
  // updateAI()
  // check for collisions on X Axis (scores)
  checkXCollisions(gameBall, myGameArea, playerPaddle, AIPaddle)
  gameBall.update()
  playerPaddle.update()
  AIPaddle.update()
}

function checkYCollisions (ball, gameArea) {
  // check top Y=0
  if (ball.y - (ball.r * 2) === 0 || ball.y === gameArea.canvas.height) {
    YSpeed *= -1
  }
}

function checkXCollisions (ball, gameArea, player, ai) {
  if (ball.x === 0) {
    console.log('CPU +1')
    ball.x = 250
    ball.y = 150
  }

  if (ball.x - ball.r === gameArea.canvas.width) {
    console.log('player + 1')
    ball.x = 250
    ball.y = 150
  } else if (ball.x - (ball.r * 2) === ai.x && (ball.y < ai.y + ai.height && ball.y > ai.y)) {
    console.log('CPU foo')
    XSpeed *= -1
  } else if (ball.x - (ball.r * 2) === ai.x && (ball.y > ai.y + ai.height || ball.y < ai.y)) {
    // the above condition is wrong and needs to be changed, and then mirrored for player below
    console.log('cpu bar')
    console.log(ball.x - (ball.r * 2))
    XSpeed *= -1
    YSpeed *= -1
  }

  if (ball.x === player.x + player.width && (ball.y < player.y + player.height && ball.y > player.y)) {
    console.log('foo')
    XSpeed *= -1
  }

  if (ball.x === player.x + player.width && (ball.y > player.y + player.height && ball.y < player.y)) {
    console.log('bar')
    XSpeed *= -1
    YSpeed *= -1
  }
}
