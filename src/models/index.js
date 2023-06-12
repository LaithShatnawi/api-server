'use strict'

require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const clothes = require('./clothes')
const food = require('./food')
const postgres_uri = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
} : {};

let sequelize = new Sequelize(postgres_uri, sequelizeOptions);

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes)
}
