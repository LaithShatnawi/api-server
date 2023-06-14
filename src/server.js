'use strict';
const express = require("express");
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes.route');
const foodRouter = require('./routes/food.route');
const authorsRouter = require('./routes/authors.route');
const booksRouter = require('./routes/books.route');

app.use(express.json());
app.use(clothesRouter);
app.use(foodRouter);
app.use(authorsRouter);
app.use(booksRouter);

app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('Hello World');
}

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}
module.exports = {
    start: start,
    app: app,
}