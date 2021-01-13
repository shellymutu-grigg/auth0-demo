const path = require('path')

const express = require('express')

// const objects = require('./routes/objectsRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/objects', objects)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../server/public/index.html'))
})

module.exports = server
