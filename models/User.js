import Sequelize from "sequelize";
import db from "../database/db.js";

export const User = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname:{
            type:Sequelize.STRING
        },
        lastname:{
            type:Sequelize.STRING
        },
        username:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        email_verified:{
            type:Sequelize.BOOLEAN
        },
        date_created:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
export default User;