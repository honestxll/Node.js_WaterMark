const images = require('images')
const path = require('path')

const watermarkImage = images('./water.png')
const sourceImage = images('./source.png').resize(800)

const position = {
  x: (sourceImage.width() - watermarkImage.width()) / 2,
  y: (sourceImage.height() - watermarkImage.height()) / 2
}

images(sourceImage)
  .draw(watermarkImage, position.x, position.y)
  .save('./source.png')
