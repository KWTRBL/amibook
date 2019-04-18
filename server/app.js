const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
users = [
    {
        id: 'nut',
        name: "Nut Chukamphaeng",
        phone: "1233333",
        line: "1231231",
        numb: 420,
        numg: 3
    },
    {
        id: 'kaew',
        name: "Kaew",
        phone: "0000000000",
        line: "kaew",
        numb: 5,
        numg: 1
    }
]

app.get('/test', (req, res) => {
    console.log('test')
    res.send(users)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))