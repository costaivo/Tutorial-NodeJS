const express = require('express')
const app = express()
const port = 3001

app.get('/',function(req,res){
    res.send('Hello World!')
})

app.listen(port,function(){
    console.log(`Express App Started.Listening on port : ${port}!`)
})


/* Using ES6 syntax */
//app.get('/', (req, res) => res.send('Hello World!'))
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))