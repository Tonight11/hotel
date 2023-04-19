import express from 'express';

require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT;


const app = express();

const start = async () =>{
    try {
        app.listen(SERVER_PORT, () => {
            console.log(`listen ${SERVER_PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()
