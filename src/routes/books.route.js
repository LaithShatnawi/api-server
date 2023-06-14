const express = require('express');
const booksRouter = express.Router();
const { authorsModel, booksModel } = require('../models/index');
booksRouter.get("/books", getAllbooks);
booksRouter.get("/books/:id", getOnebook);
booksRouter.post("/books", createbook);
booksRouter.put("/books/:id", updatebook);
booksRouter.delete("/books/:id", deletebook);

async function getAllbooks(req, res) {
    let booksResult = await booksModel.read();
    res.status(200).json(booksResult);
}

async function getOnebook(req, res) {
    const booksId = parseInt(req.params.id);
    let books = await booksModel.read(booksId)
    res.status(200).json(books);
}
async function createbook(req, res) {
    let newBooks = req.body;
    let books = await booksModel.create(newBooks);
    res.status(201).json(books);
}
async function updatebook(req, res) {
    let booksId = parseInt(req.params.id);
    let updateBooks = req.body;
    let foundBooks = await booksModel.update(updateBooks, booksId);
    res.status(201).json(foundBooks);
}
async function deletebook(req, res) {
    let booksId = parseInt(req.params.id);
    let deleteBooks = await booksModel.delete(booksId);
    res.status(204).json(deleteBooks);
}

module.exports = booksRouter;
