//Modules
const express = require("express");
const cors = require("cors");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
const jwt = require("jsonwebtoken");
const auth = require("./jwt-strategy");
const bcrypt = require("bcrypt");
require("dotenv").config();

//Setup Modules
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
auth(knex).initialize();

//Route
app.post("/auth/signup", async (req, res) => {
    //handle email and password signup
    const { email, password, username } = req.body;
    console.log("Sipup info:", email, password, username)

    //using knex to check user exits and register
    let response = await knex("users").where({ email }).orWhere({ username }).first();
    console.log(response);

    if (response == undefined) {
        bcrypt.hash(password, 10, async function (err, hash) {
            try {
                await knex("users").insert({ email, password: hash, username });
                res.json("New user created");
            }
            catch { res.status(401).json(err) }
        });
    } else {
        res.status(401).json("Email or username has been used.")
    }
});

app.post("/auth/login", async (req, res) => {
    //handle email and password login
    const { email, password } = req.body;

    let user = await knex("users").where({ email }).first();
    if (user) {
        //check password
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                const payload = {
                    id: user.id,
                    username: user.username
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET);
                console.log(token);
                res.json({ token });
            } else {
                res.status(401).json("Invalid password.");
            }
        });
    } else {
        res.status(401).json("Invalid email.");
    }
});

app.get("/todo", async (req, res) => {
    //show todo-list
    let response = await knex("todo_list");
    console.log(response);
});

app.listen(8000, () => { console.log("Listening on port: 8000") })