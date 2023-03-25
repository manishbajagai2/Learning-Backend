const express = require('express');
var bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.post('/submit', (req, res) => {
    let username = req.body.username
    console.log(username)
    res.send(`Hi my name is ${username}`)
})

app.get('/search', (req, res) => {
    console.log(req.query)
    if(req.query['name'] === undefined){
        res.send(`Hello Guest`)
    }else{
        res.send(`Hello ${req.query.name}`)
    }
})

app.listen(3000, function (err) {
    if(err) {console.log(err);}
    console.log('App successfully running at port 3000')
})