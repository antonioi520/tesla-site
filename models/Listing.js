import Sequelize from "sequelize";
import db from "../database/db.js";

export const Listing = db.sequelize.define(
    'listing',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type:Sequelize.STRING
        },
        last_name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        model:{
            type:Sequelize.STRING
        },
        year:{
            type:Sequelize.STRING
        },
        color:{
            type:Sequelize.STRING
        },
        summary:{
            type:Sequelize.STRING
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
export default Listing;