var express = require("express")
var app = express();

app.get('/', function(req, resp){
    resp.send("I am from API")
});

app.get('/time', function(req, resp){
    var time = new Date().toLocaleTimeString();
    resp.send(`Current Time is: ${time}`)
})


app.get('/date', function(req, resp){
    var date = new Date().toLocaleDateString();
    resp.send(`Current Time is: ${date}`)
})

app.listen(9000, () => console.log("API Started Listening"))


// app.get('/', function(req, resp){
//     resp.send("Welcome to REST API")
// })

// app.listen(9000, () => console.log("API Started Listening"))