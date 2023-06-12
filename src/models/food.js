'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
    name: {
        type: DataTypes.STRING,
    },
    origin: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    vegan: {
        type: DataTypes.BOOLEAN,
    }
});
module.exports = Food;