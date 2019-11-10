const Sequelize=require('sequelize');

const sequelize = new Sequelize('mvc_sequelize','postgres','josejmjr',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
});

module.exports = sequelize;