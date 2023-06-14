'use strict'

require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const clothes = require('./clothes');
const food = require('./food');
const authors = require('./authors.model');
const books = require('./books.model');
const Collection = require('./library/Collection');
const postgres_uri = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
} : { logging: false };

let sequelize = new Sequelize(postgres_uri, sequelizeOptions);

const authorsTable = authors(sequelize, DataTypes);
const booksTable = books(sequelize, DataTypes);


const authorsCollection = new Collection(authorsTable);
const booksCollection = new Collection(booksTable);

authorsTable.hasMany(booksTable, {
    foreignKey: 'authorId',
    sourceKey: 'id',
});
booksTable.belongsTo(authorsTable, {
    foreignKey: 'authorId',
    targetKey: 'id',
});

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes),
    authorsModel:authorsCollection,
    booksModel:booksCollection
}
