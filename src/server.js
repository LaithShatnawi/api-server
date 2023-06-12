'use strict';
const express = require("express");
const app = express();
const clothesRouter = require('./routes/clothes.route');
const foodRouter = require('./routes/food.route');

app.use(express.json());
app.use(clothesRouter);
app.use(foodRouter);

app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('Hello World');
}
function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}
module.exports = {
    start: start,
    app: app,
}