function Cell(col, row) {
    this.col = col
    this.row = row
    this.topWall = true
    this.rightWall = true
    this.bottomWall = true
    this.leftWall = true
    this.visited = false
  
    this.checkNeighbors = function() {
      let neighbors = []
  
      let topNeighbor = grid[index(col, row - 1)]
      let rightNeighbor = grid[index(col + 1, row)]
      let bottomNeighbor = grid[index(col, row + 1)]
      let leftNeighbor = grid[index(col - 1, row)]
  
      if (topNeighbor && !topNeighbor.visited) neighbors.push(topNeighbor)
      if (rightNeighbor && !rightNeighbor.visited) neighbors.push(rightNeighbor)
      if (bottomNeighbor && !bottomNeighbor.visited) neighbors.push(bottomNeighbor)
      if (leftNeighbor && !leftNeighbor.visited) neighbors.push(leftNeighbor)
  
      if (neighbors.length > 0) {
        return neighbors[floor(random(0, neighbors.length))]
      } else {
        return undefined
      }
    }

    this.highlightExit = function() {
        if ((this.col === cols-1) && (this.row === rows-1)) {
            let x = this.col * cellSize
            let y = this.row * cellSize
            noStroke()
            fill(49, 165, 49, 100)
            rect(x, y, cellSize, cellSize)
        }
    }

    this.highlight = function() {
      let x = this.col * cellSize
      let y = this.row * cellSize
      noStroke()
      fill(0, 0, 255, 100)
      rect(x, y, cellSize, cellSize)
    }
  
    this.show = function() {
      let x = this.col * cellSize
      let y = this.row * cellSize
      stroke(255)
      if (this.topWall) line(x, y, x + cellSize, y)
      if (this.rightWall) line(x + cellSize, y, x + cellSize, y + cellSize)
      if (this.bottomWall) line(x + cellSize, y + cellSize, x, y + cellSize)
      if (this.leftWall) line(x, y + cellSize, x, y)
  
      if (this.visited) {
        noStroke()
        fill(255, 0, 255, 100)
        rect(x, y, cellSize, cellSize)
      }
    }
}