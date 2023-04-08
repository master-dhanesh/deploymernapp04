// dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const app = express();

// cors
const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/", (req, res, next) => {
    res.status(200).json({
        message: "test route from api",
    });
});

app.get("/api/livetime", (req, res, next) => {
    res.status(200).json({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
    });
});

app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
