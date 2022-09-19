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
// auth(knex).initialize();

//Route
app.post("/auth/signup", async (req, res) => {
    //handle email and password signup
    const { email, password } = req.body;
    console.log("Sipup info:", email, password)

    //using knex to check user exits and register
    let response = await knex("users").where({ email }).first();
    if (response == undefined) {
        bcrypt.hash(password, 10, async function (err, hash) {
            try {
                await knex("users").insert({ email, password: hash });
                res.json("New user created");
            }
            catch { res.status(401).json(err) }
        });
    } else {
        res.status(401).json("Email has been used.")
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
    var token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    var user = jwt.verify(token, process.env.JWT_SECRET)
    if (user) {
        var user_id = user.id;
        let response = await knex("todo_list").where({ user_id });
        res.json(response);
    } else { res.status(401).json("Invalide user") }
});

app.post("/todo", async (req, res) => {
    //insert todo-list
    var token = req.body.Authorization;
    var body = req.body.Body.body.todo;
    token = token.replace("Bearer ", "");
    var user = jwt.verify(token, process.env.JWT_SECRET)
    if (user) {
        var user_id = user.id;
        await knex("todo_list").insert({ user_id, todo: body },);
        res.json(body);
    } else { res.status(401).json("Invalide user") }
});

app.delete("/todo", async (req, res) => {
    //delete todo-list
    var token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    var user = jwt.verify(token, process.env.JWT_SECRET)
    if (user) {
        var user_id = user.id;
        await knex("todo_list").where({ user_id }).del();
        res.json("Cleaned all things");
    } else { res.status(401).json("Invalide user") }
});

app.listen(8000, () => { console.log("Listening on port: 8000") })