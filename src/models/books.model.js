'use strict'

const Books = (sequelize, DataTypes) =>
    sequelize.define('books', {
        bookName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publishedOn: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

module.exports = Books;