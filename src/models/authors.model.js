'use strict'

const Authors = (sequelize, DataTypes) =>
    sequelize.define('authors', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

module.exports = Authors;