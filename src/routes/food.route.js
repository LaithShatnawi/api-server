const express = require('express');
const foodRouter = express.Router();
const { Food } = require('../models/index');
foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getCertainFood);
foodRouter.post("/addfood", addFood);
foodRouter.put("/updatefood/:id", updateFood);
foodRouter.delete("/deletefood/:id", deleteFood);

async function getFood(req, res) {
    let foodResult = await Food.findAll();
    res.status(200).json(foodResult);
}
async function getCertainFood(req, res) {
    const foodsId = parseInt(req.params.id);
    let certainFood = await Food.findOne({
        where: {
            id: foodsId
        }
    })
    res.status(200).json(certainFood);
}
async function addFood(req, res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}
async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await Food.findOne({ where: { id: foodId } });
    let updatedFood = await foundFood.update(updateFood);
    res.status(201).json(updatedFood);
}
async function deleteFood(req, res) {
    let foodId = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id: foodId } });
    res.status(204).json(deleteFood);
}

module.exports = foodRouter;