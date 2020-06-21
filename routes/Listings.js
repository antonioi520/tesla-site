import Express from "express";
const TeslaListings = Express.Router();
import cors from "cors";
import jwt from "jsonwebtoken";
import multer from 'multer';
import {v4 as uuidv4} from 'uuid';
import Listing from "../models/Listing.js";
import bcrypt from "bcrypt";

TeslaListings.use(cors());

process.env.SECRET_KEY = 'secret';

const DIR = './client/public/imgs/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


export const Listing1 = TeslaListings.post('/AddListing', upload.single('thumbnail'), (req, res) => {
    const today = new Date();
    const url = req.protocol + '://' + req.get('host')
    const listingData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
        summary: req.body.summary,
        date_created: today,
        vin: req.body.vin,
        listing_type: req.body.listing_type,
        battery: req.body.battery,
        city: req.body.city,
        state: req.body.state,
        mileage: req.body.mileage,
        asking_price: req.body.asking_price,
        car_condition: req.body.car_condition,
        autopilot: req.body.autopilot,
        warranty: req.body.warranty,
        self_driving: req.body.self_driving,
        modifications: req.body.modifications,
        made_repairs: req.body.made_repairs,
        own_title: req.body.own_title,
        thumbnail: req.file.filename,
        sticker: req.body.sticker,
        pictures: req.body.pictures
    }
    Listing.findOne({
        where:{
            email: req.body.email
        }
    }).then(listing => {
                Listing.create(listingData).then(listing => {
                    res.json({status: listing.model + ' listed'});
                }).catch( err => {
                    res.send('error: ' + err);
                })
    })
        .catch(err => {
            res.send('error: ' + err);
        })
})

Listing1.get('/AllListings', (req, res) => {
    const model = req.query.model;
    const condition = model ? { model: { [Listing.like]: `%${model}%` } } : null;
    Listing.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
})

Listing1.get('/UserListings/:email', (req, res) => {
    Listing.findAll({
        where: {
            email: req.params.email
        }}).then(data => {
            res.send(data);
        }).catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
})

Listing1.get('/public/:thumbnail', (req, res) => {
    Listing.findAll({
        where: {
            thumbnail: req.params.thumbnail
        }}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
})

Listing1.get('/Listing/:id', (req, res) => {
    const id = req.params.id;

    Listing.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
})

Listing1.put('/UpdateListing/:id', (req, res) => {
    const id = req.params.id;

    Listing.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Listing was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Listing with id=${id}. Maybe Listing was not found or req.body is empty!`
            });
        }
    }).catch(err => {
            res.status(500).send({
                message: "Error updating Listing with id=" + id
            });
        });
})

Listing1.delete('/DeleteListing/:id', (req, res) =>{
    const id = req.params.id;
    Listing.destroy({
        where: {id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Listing was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Listing with id=${id}. Maybe Listing was not found!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Listing with id=" + id
            });
        });
})

export default Listing1;