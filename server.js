const express = require('express')

const {getReservations} = require('')

const app = express()

app.get('/', (req, res) => {
    getReservations()
})

app.listen(3001,() => {
    console.log("PORT is running")
})