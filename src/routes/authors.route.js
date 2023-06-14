const express = require('express');
const authorsRouter = express.Router();
const { authorsModel, booksModel } = require('../models/index');

authorsRouter.get("/authors", getAllAuthors);
authorsRouter.get("/authors/:id", getOneAuthor);
authorsRouter.post("/authors", createAuthor);
authorsRouter.put("/authors/:id", updateAuthor);
authorsRouter.delete("/authors/:id", deleteAuthor);
authorsRouter.get("/authorsOrders/:id", AuthorBooks);

async function AuthorBooks(req, res) {
    const authorId = parseInt(req.params.id);
    let authorBooksResult = await authorsModel.readBooksFromAuthor(authorId, booksModel.model);
    res.status(200).json(authorBooksResult);
}
async function getAllAuthors(req, res) {
    let authorsResult = await authorsModel.read();
    res.status(200).json(authorsResult);
}
async function getOneAuthor(req, res) {
    const authorId = parseInt(req.params.id);
    let author = await authorsModel.read(authorId)
    res.status(200).json(author);
}
async function createAuthor(req, res) {
    let newAuthor = req.body;
    let author = await authorsModel.create(newAuthor);
    res.status(201).json(author);
}
async function updateAuthor(req, res) {
    let authorId = parseInt(req.params.id);
    let updateAuthor = req.body;
    let foundAuthor = await authorsModel.update(updateAuthor, authorId);
    res.status(201).json(foundAuthor);
}
async function deleteAuthor(req, res) {
    let authorId = parseInt(req.params.id);
    let deleteAuthor = await authorsModel.delete(authorId);
    res.status(204).json(deleteAuthor);
}

module.exports = authorsRouter;
