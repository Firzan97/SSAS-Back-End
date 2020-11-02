const Fs = require("fs");
const Path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

const db = {};

Fs.readdirSync(__dirname)
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(file => {
        const model = require('./' + file)(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

db.sequelize = sequelize;

module.exports = db