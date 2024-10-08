const express = require('express');
const { request } = require('https');

const PORT = 3000;
const app = express();  // Create a express server object

app.get('/home',(request,response) => {
    response.send("Hi there! Welcome to get.");
})

app.post('/home',(request,response) => {
    response.json({
        mssg : "OK"
    });
    response.send("Hi there! Welcome to Post.");
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})