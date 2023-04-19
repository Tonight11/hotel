require('dotenv').config();
const express = require('express');
const app = express();

const SERVER_PORT = process.env.SERVER_PORT;

const start = async () =>{
    try {
        app.listen(SERVER_PORT, (error) => {
            error ? console.log(error) : console.log(`listen ${SERVER_PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()