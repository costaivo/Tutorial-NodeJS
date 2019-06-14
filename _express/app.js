const express = require('express');
const app = express();

const PORT = 3091;

const Users = [{ id: 1, name: 'ivo', age: '2' }, { id: 2, name: 'sumit', age: '2' }, { id: 3, name: 'sulay', age: '2' }, { id: 4, name: 'sharma', age: '2' }]

app.get('/', function (req, res) {
    res.send('Hello Express')
})

app.get('/User', function (req, res) {
    res.send(Users)
})


app.get('/User/:id/:name', function (req, res) {
    console.log(req.params)
    const index = Number(req.params.id) - 1
    console.log(index)
    res.send(Users[index])
})



app.get('/Subjects', function (req, res) {
    res.send('Hello subjects')
})


app.get('/Tests', function (req, res) {
    res.send('Hello Express')
})



app.listen(PORT, function (err) {
    if (err)
        console.log("Error occured :", err)

    console.log('Application started on port :', PORT)
})