const express = require('express')
const path = require('path')
const renderer = require('./renderer')

const app = express()
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(renderer)
app.listen(8000, () => {
    console.warn('running at http://localhost:8000')
})