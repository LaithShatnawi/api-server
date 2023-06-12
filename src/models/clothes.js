'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    hats: {
        type: DataTypes.STRING,
    },
    jackets: {
        type: DataTypes.STRING,
    },
    shirts: {
        type: DataTypes.STRING,
    },
    pants: {
        type: DataTypes.STRING,
    },
    shoes: {
        type: DataTypes.STRING,
    }
});
module.exports = Clothes;