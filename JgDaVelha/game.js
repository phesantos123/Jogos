let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let simbols = ['o', 'x']

function handleMove(position) {
  board[position] = simbols[playerTime]
  if (playerTime == 0) {
    playerTime = 1
  } else {
    playerTime = 0
  }
}
