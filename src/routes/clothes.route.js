const express = require('express');
const clothesRouter = express.Router();
const { Clothes } = require('../models/index');
clothesRouter.get("/clothes", getClothes);
clothesRouter.get("/clothes/:id", getCertainClothes);
clothesRouter.post("/addclothes", addClothes);
clothesRouter.put("/updateclothes/:id", updateClothes);
clothesRouter.delete("/deleteclothes/:id", deleteClothes);

async function getClothes(req, res) {
    let clothesResult = await Clothes.findAll();
    res.status(200).json(clothesResult);
}
async function getCertainClothes(req, res) {
    const clothesId = parseInt(req.params.id);
    let certainClothes = await Clothes.findOne({
        where: {
            id: clothesId
        }
    })
    res.status(200).json(certainClothes);
}
async function addClothes(req, res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}
async function updateClothes(req, res) {
    let clothesId = parseInt(req.params.id);
    let updateClothes = req.body;
    let foundClothes = await Clothes.findOne({ where: { id: clothesId } });
    let updatedClothes = await foundClothes.update(updateClothes);
    res.status(201).json(updatedClothes);
}
async function deleteClothes(req, res) {
    let clothesId = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id: clothesId } });
    res.status(204).json(deleteClothes);
}

module.exports = clothesRouter;