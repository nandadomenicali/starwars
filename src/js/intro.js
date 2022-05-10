let width = window.innerWidth
let height = window.innerHeight
let intro = document.getElementsByClassName('intro')[0]
let historia = document.getElementsByClassName('historia')[0]
let paragrafos = document.getElementsByClassName('paragrafos')[0]
let som = document.getElementById('som')

intro.style.fontSize = width / 30 + 'px'
historia.style.fontSize = width / 20 + 'px'
paragrafos.style.height = height + 'px'

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  intro.style.fontSize = width / 30 + 'px'
  historia.style.fontSize = width / 20 + 'px'
  paragrafos.style.height = height + 'px'
})

function play() {
  intro.className = 'intro intro_texto intro_animacao'
  historia.className = 'historia historia_texto historia_animacao'
  som.play()
}