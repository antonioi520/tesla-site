import Sequelize from "sequelize";
import db from "../database/db.js";

export const Listing = db.sequelize.define(
    'teslalisting',
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
        },
        vin:{
            type:Sequelize.STRING
        },
        listing_type:{
            type:Sequelize.STRING
        },
        battery:{
            type:Sequelize.STRING
        },
        city:{
            type:Sequelize.STRING
        },
        state:{
            type:Sequelize.STRING
        },
        mileage:{
            type:Sequelize.MEDIUMINT
        },
        asking_price:{
            type:Sequelize.DECIMAL
        },
        car_condition:{
            type:Sequelize.STRING
        },
        autopilot:{
            type:Sequelize.BOOLEAN
        },
        warranty:{
            type:Sequelize.BOOLEAN
        },
        self_driving:{
            type:Sequelize.BOOLEAN
        },
        modifications:{
            type:Sequelize.BOOLEAN
        },
        made_repairs:{
            type:Sequelize.BOOLEAN
        },
        own_title:{
            type:Sequelize.BOOLEAN
        },
        thumbnail:{
            type:Sequelize.STRING
        },
        sticker:{
            type:Sequelize.STRING
        },
        pictures:{
            type:Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)
export default Listing;