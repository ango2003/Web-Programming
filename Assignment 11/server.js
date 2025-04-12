const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const peoplePool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "personal_info",
    password: "123456789",
    port: 5432,
});

// Pool for "hobbies" database
const hobbiesPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hobbies",
    password: "123456789",
    port: 5432,
});

app.get("/hobbies", async (req, res) => {
    try {
        const result = await hobbiesPool.query("SELECT * FROM hobbies");
    res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/people", async (req, res) => {
    try {
        const result = await peoplePool.query("SELECT * FROM people");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
