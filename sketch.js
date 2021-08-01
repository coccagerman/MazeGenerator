let cols, rows
let cellSize = 20
let grid = []
let player
let current
let stack = []
let leftLimit = []
let rightLimit = []

function setup() {
  createCanvas(400, 400)
  cols = floor(width / cellSize)
  rows = floor(height / cellSize)

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j)
      grid.push(cell)
    }
  }

  current = grid[0]

  for (let i = 1; i <= cols; i++) {
    rightLimit.push((cols*i)-1)
  }

  for (let i = 0; i < cols; i++) {
    leftLimit.push(cols*i)
  }
}

function draw() {
  background(51)
  for (let i = 0; i < grid.length; i++) grid[i].show()

  current.visited = true
  current.highlight()

  let next = current.checkNeighbors()
  if (next) {
    next.visited = true

    stack.push(current)

    removeWalls(current, next)

    current = next
  } else if (stack.length > 0) {
    current = stack.pop()
  }

  grid[grid.length-1].highlightExit()
}

function index(row, col) {
  if (row < 0 || col < 0 || row > cols - 1 || col > rows - 1) return -1
  return row + col * cols
}

function removeWalls(current, next) {
  let x = current.col - next.col
  if (x === 1) {
    current.leftWall = false
    next.rightWall = false
  } else if (x === -1) {
    current.rightWall = false
    next.leftWall = false
  }

  let y = current.row - next.row
  if (y === 1) {
    current.topWall = false
    next.bottomWall = false
  } else if (y === -1) {
    current.bottomWall = false
    next.topWall = false
  }
}