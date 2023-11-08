const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
app.use(express.json())


app.get('/', (req, res)=>{
    res.status(200).send("Hello World!")
})


app.get('/login', (req, res) => {
    var user = "Durand"
    res.cookie("name", user); // input ?? 
    res.send(`You Just Saved a cookie with name ${req.cookies.name}`)
  })
  
  app.get('/hello', (req, res) => {
    res.send(`Welcome ${req.cookies.name}`)
  })
  

module.exports = app;