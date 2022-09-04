const clearButton = document.getElementById("clear")
const colorInput = document.getElementById("color")
const lineWidthInput = document.getElementById("lineWidth")

const canvas = document.getElementById("drawing-board")
const ctx = canvas.getContext("2d")
//
canvas.width = 800
canvas.height = 500

let lineWidth = lineWidthInput.value

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

colorInput.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value
})

lineWidthInput.addEventListener("change", (e) => {
  lineWidth = e.target.value
})

const draw = (e) => {
  ctx.lineWidth = lineWidth
  ctx.lineCap = "round"

  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

canvas.addEventListener("mousedown", (e) => {
  ctx.beginPath()
  canvas.addEventListener("mousemove", draw)
})

document.addEventListener("mouseup", (e) => {
  canvas.removeEventListener("mousemove", draw)
})
