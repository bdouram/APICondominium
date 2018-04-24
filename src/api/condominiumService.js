const Condominium = require('./condominium') // Importing Mongoose-Schema 
const errorHandler = require('../errors/errors') // Importing errors definitions

Condominium.methods(['get', 'post'])// Set get and post for API
Condominium.after('post', errorHandler) // Configuring the errors warnings on API POST.

//Filtering in MongoDB by name of resident.
Condominium.route('name', (req, res, next) => {
    Condominium.aggregate([
        { $match: { 'resident.name': req.query.name || req.body.name || req.headers['name'] } }
    ]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    })
})

//Filtering in MongoDB by block.
Condominium.route('block', (req, res, next) => {
    Condominium.aggregate([
        { $match: { 'block': req.query.block || req.body.block || req.headers['block'] } }
    ]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    })
})

//Filtering in MongoDB by number of apartament.
Condominium.route('apartament', (req, res, next) => {
    Condominium.aggregate([
        { $match: { 'numberApartment': req.query.apartament || req.body.apartament || req.headers['apartament'] } }
    ]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    })
})

//Filtering in MongoDB by Apartament & block.
Condominium.route('apartament_block', (req, res, next) => {
    Condominium.aggregate([
        {
            $match: {
                'numberApartment': req.query.apartament || req.body.apartament || req.headers['apartament'],
                'block': req.query.block || req.body.block || req.headers['block']
            }
        }
    ]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    })
})

module.exports = Condominium
