export default class BarChart {
  constructor (opts) {
    this.options = opts
    this.canvas = opts.canvas
    this.colors = opts.colors
    this.ctx = this.canvas.getContext('2d')
  }

  draw = () => {
    let maxValue = 0;
    for (let categ in this.options.data){
        maxValue = Math.max(maxValue, this.options.data[categ])
    }

    const canvasActualHeight = this.canvas.height - this.options.padding * 2
    const canvasActualWidth = this.canvas.width - this.options.padding * 2

    //drawing the grid lines
    let gridValue = 0
    while (gridValue <= maxValue){
        const gridY = canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding
        this.drawLine(
            0,
            gridY,
            this.canvas.width,
            gridY,
            this.colors.grid
        );
         
        //writing grid markers
        this.ctx.save()
        this.ctx.fillStyle = this.colors.grid
        this.ctx.font = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
        this.ctx.fillText(gridValue, 0, gridY - 2)
        this.ctx.restore()

        gridValue += this.options.gridScale
    }

    //drawing the bars
    let barIndex = 0
    const numberOfBars = Object.keys(this.options.data).length
    const barSize = (canvasActualWidth / numberOfBars)

    for (let categ in this.options.data) {
        const val = this.options.data[categ]
        const barHeight = Math.round(canvasActualHeight * val / maxValue)
        this.drawBar(
            this.options.padding + barIndex * barSize,
            this.canvas.height - barHeight - this.options.padding,
            barSize - 3,
            barHeight,
            this.colors.main
        )

        barIndex++
    }
  }

  drawLine = (startX, startY, endX, endY, color) => {
    this.ctx.save()
    this.ctx.strokeStyle = color
    this.ctx.beginPath()
    this.ctx.moveTo(startX,startY)
    this.ctx.lineTo(endX,endY)
    this.ctx.stroke()
    this.ctx.restore()
  }
  
  drawBar = (upperLeftCornerX, upperLeftCornerY, width, height, color) => {
    this.ctx.save()
    this.ctx.fillStyle = color
    this.ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height)
    this.ctx.restore()
  }
}