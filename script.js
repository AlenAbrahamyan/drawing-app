const canvas = document.getElementById("drawing-board")
const ctx = canvas.getContext('2d')
////////
canvas.width = 800
canvas.height = 500

ctx.fillStyle = 'white'
ctx.fillRect(0,0, canvas.width, canvas.height)

const clearBtn = document.getElementById('clear')
const colorInput = document.getElementById('color')
const lineWidthInput = document.getElementById('line-width')

clearBtn.addEventListener('click', ()=>{
  ctx.fillRect(0, 0, canvas.width, canvas.height)
})

colorInput.addEventListener('change', ()=>{
  ctx.strokeStyle = colorInput.value
})

lineWidthInput.addEventListener('change', ()=>{
  ctx.lineWidth = lineWidthInput.value
})

const draw = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

canvas.addEventListener('mousedown', ()=>{
  ctx.beginPath()
  canvas.addEventListener('mousemove', draw)
})

window.addEventListener('mouseup', ()=>{
  canvas.removeEventListener('mousemove', draw)
  ctx.closePath()
})
