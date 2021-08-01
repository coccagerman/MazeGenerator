const keyBoardKeys = key => {

    switch (key) {
        case 38:
            // top
            if (current.row > 0 && !current.topWall) {
                current = grid[index(current.col, current.row - 1)]
            }

            break;
        case 39:
            // right
            if ((grid.indexOf(current)+1 < grid.length) && (rightLimit.indexOf(grid.indexOf(current)) === -1) && !current.rightWall) {
                current = grid[grid.indexOf(current)+1]
            }

            break;
        case 40:
            // bottom
            if (current.row < rows-1 && !current.bottomWall) {
                current = grid[index(current.col, current.row + 1)]
                            }

            break;
        case 37:
            // left
            if ((grid.indexOf(current)-1 >= 0) && (leftLimit.indexOf(grid.indexOf(current)) === -1) && !current.leftWall) {
                current = grid[grid.indexOf(current)-1]
            }

            break;

        default:
            break;
    }
}

document.addEventListener('keydown', e => keyBoardKeys(e.keyCode))