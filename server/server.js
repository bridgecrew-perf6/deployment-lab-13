const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '6236c16ea8db424ba3cf494341d562a5',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})


const port = process.env.PORT || 5005
app.listen (port, ()=> console.log(`Listening on ${port}`))