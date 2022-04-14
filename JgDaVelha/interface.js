document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('click', handleClick)
  })
})

function handleClick(event) {
  let square = event.target
  let position = square.id
  if (handleMove(position)) {
    setTimeout(() => {
      alert(`O jogo Acabou - O vencedor foi ${playerTime}`)
    }, 10)
  }
  updateSquare(position)
}

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let simbol = board[position]
  square.innerHTML = `<div class="${simbol}"></div>`
}
