const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
require('dotenv').config()

//Adding a client
router.post('/',
    body('name', 'name must contain alphabetic only').isAlpha(),
    body('email', "Please enter a valid Email").isEmail(),
    body('adress', "Please enter a valid adress").isString(),
    body('phone', 'Phone must contain only numbers').isNumeric(),
    body('category').isString(),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        Client.find({ email: req.body.email })
            .then(clients => {
                if (clients.length) {
                    return res.status(400).send({
                        errors: [{
                            msg:
                                "Client already exist! Would you like to update? "
                        }

                        ]
                    }
                    )
                }


                let newClient = new Client(req.body)

                newClient.save();

                let payload = {
                    clientId: newClient._id,
                };

                jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.send({ token });
                });
            });
    });

module.exports = router;