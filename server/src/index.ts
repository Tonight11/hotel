require('dotenv').config();

import express, {Application} from 'express';
import routes from "./routing/index";
import sequelizeConnection  from "./db"
import "./models/models"

const SERVER_PORT = process.env.SERVER_PORT;

const app: Application = express();
app.use("/api", routes)

const start = async () => {
    try {
        await sequelizeConnection.authenticate();
        await sequelizeConnection.sync();
        app.listen(SERVER_PORT, () => {
            console.log(`listen ${SERVER_PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
