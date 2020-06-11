import Express from "express";
const Users = Express.Router();
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User.js";

Users.use(cors());

process.env.SECRET_KEY = 'secret';



export const User1 = Users.post('/Register', (req, res) => {
    const today = new Date();
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        email_verified: 0,
        date_created: today
    }
    User.findOne({
        where:{
            email: req.body.email
        }
    }).then(user => {
            if(!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData).then(user => {
                            res.json({status: user.email + ' registered'});
                        }).catch( err => {
                            res.send('error: ' + err);
                        })
                })
            }
            else{
                res.json({error: "User already exists"});
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })

})

User1.post('/login', (req, res) => {
    User.findOne({
        where:{
            username: req.body.username,
        }
    })
        .then(user => {
            if(user)
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                        expiresIn: 1440
                    })
                    res.send(token)
                }else{
                    res.status(400).json({error: 'User does not exist'})
                }
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
})

export default User1;

