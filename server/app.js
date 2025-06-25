import express from "express";
import pg from "postgres";
import axios from "axios";
import dotenv from "dotenv/config"
import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSucessStatus: 200
}

app.use(cors(corsOptions));



app.listen(port, () => {
    console.log("Listening on port " + port + ".");
});
