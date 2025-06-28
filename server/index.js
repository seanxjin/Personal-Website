import express from "express";
import cors from "cors"; 

const app = express();
const port = 3000;

const corsOptions = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



// Route
app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "orange", "banana", "strawberry"]});
});


app.listen(port, () => {
    console.log("Listening on port " + port + ".");
});