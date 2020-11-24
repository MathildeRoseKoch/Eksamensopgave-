const express = require('express');//gemmer express-library i variabel  API
const server = express();//initialiserer express-server
const PORT = process.env.port || 4000;

/*const User = require('../client/model/User.js"');// henter infomation fra klassen User 

server.post("/User.js",(req, res) => {
    res.json(User, "User has been created")
});

server.get("/User.js", (req, res) => {
    res.json(User) //henter alle info om user 
});

server.put("/User.js", (req, res) => {
    res.json(User, "User has been updated")
});

server.delete("/User.js", (req, res) => {
    res.json(User, "User has been deleted")
});
*/

server.listen(PORT); 
    console.log(`Server-applikation lytter pÃ¥ http://localhost:${PORT}`)
  
