const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const width = 1200
const height = 630

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#000'
context.fillRect( 0, 0, width, height)
