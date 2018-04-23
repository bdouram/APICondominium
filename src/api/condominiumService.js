const Condominium = require('./condominium') // Importing Mongoose-Schema 
const errorHandler = require('../errors/errors') // Importing errors definitions

Condominium.methods(['get', 'post'])// Set get and post for API
Condominium.after('post', errorHandler) // Configuring the errors warnings on API POST.

module.exports = Condominium