const express = require('express')
const app = express()
const port = 3000;
const db = require('./db')

app.get('/', async (req, res) => {
    const users = await db.SelectAllUsers();
    res.json(users[0])

})

app.listen(port, () => {
    console.log(`Server opened on port=${port}`)
})