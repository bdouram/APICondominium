import restful from 'node-restful';

const mongoose = restful.mongoose;

const model = {
    block: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 20, 
    },
    numberApartment: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 20, 
    },
    phone: { 
        type: Number, 
        required: false, 
    },
    documment: {
        cpf: { 
            type: Number, 
            required: false, 
        },
        rg: { 
            type: Number, 
            required: false, 
        },
    },
    resident: {
        name: { 
            type: String, 
            required: true, 
        },
        email: { 
            type: String, 
            required: true, 
        }
    },
};

const apartmentSchema = new mongoose.Schema(model, { versionKey: false });

apartmentSchema.index({ numberApartment: 1, block: 1 }, { unique: true });

const condominiumModel = restful.model('condominium', apartmentSchema);

export default condominiumModel;