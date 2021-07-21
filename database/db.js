import Sequelize from "sequelize";

export const db = {};
const sequelize = new Sequelize("testtesladb", "dbusertesttesla", "prodo123", {
    host: 'khoun.spicerack.dreamhost.com',
    dialect: 'mysql',


    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;