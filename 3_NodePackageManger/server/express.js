const express = require('express')
const app = express()
const port = 3001

app.get('/',function(req,res){
    res.send('Hello World!')
})

app.get('/nodeJs',function(req,res){
    res.send('Hello nodejs')
})

app.get('/C',function(req,res){
    res.send('Hello C#')
})

app.get('/kotlin',function(req,res){
    res.send('Hello kotlin')
})

app.get('/swift',function(req,res){
    res.send('Hello swift')
})

app.listen(port,function(){
    console.log(`Express App Started.Listening on port : ${port}!`)
})


/* Using ES6 syntax */
//app.get('/', (req, res) => res.send('Hello World!'))
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))