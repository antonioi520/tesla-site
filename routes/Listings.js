import Express from "express";
const Listings = Express.Router();
import cors from "cors";
import jwt from "jsonwebtoken";

import Listing from "../models/Listing.js";
import bcrypt from "bcrypt";

Listings.use(cors());

process.env.SECRET_KEY = 'secret';

export const Listing1 = Listings.post('/AddListing', (req, res) => {
    const today = new Date();
    const listingData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
        summary: req.body.summary,
        date_created: today,
        created_by: req.body.created_by
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