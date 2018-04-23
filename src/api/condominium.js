const restful = require('node-restful')
const mongoose = restful.mongoose

const residentModel = {
    name: { type: String, required: true },
    email: { type: String, required: true }
}

const docummentsModel = {
    cpf: { type: Number, required: false },
    rg: { type: Number, required: false },
}

const apartmentSchema = new mongoose.Schema({
    block: { type: Number, required: true, min: 1, max: 20 },
    numberApartment: { type: Number, required: true, min: 1, max: 20 },
    phone: { type: Number, required: false },
    documment: docummentsModel,
    resident: residentModel,
}, { versionKey: false })

apartmentSchema.index({ numberApartment: 1, block: 1 }, { unique: true });

module.exports = restful.model('condominium', apartmentSchema)