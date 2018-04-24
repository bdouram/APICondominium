const mongoose = require('mongoose')

// Configuring the mongoose errors.

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/condominium')

mongoose.Error.messages.general.required = "'{PATH}' attribute is required."
mongoose.Error.messages.Number.min = "The value '{VALUE}' is less then min value '{MIN}'."
mongoose.Error.messages.Number.max = "The value '{VALUE}' is greather than the upper limit '{MAX}'."