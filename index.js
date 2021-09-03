const express = require('express')
const cors = require('cors')

console.log(process.env.USER)
console.log(process.env.HOME)
console.log(process.env.PORT)

//This will work on Heroku and production- Will have a value # in heroku land
const PORT = process.env.PORT || 5000

const server = require('express')()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`<h1>Pauline is the best in the WORLD</h1>`)
})

server.get('/api', (req, res) => {
    res.json({ message: 'I believe I can fly'})
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})