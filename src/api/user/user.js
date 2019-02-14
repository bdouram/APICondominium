import restful from 'node-restful';

const mongoose = restful.mongoose;

const model = {
    name: { 
        type: String, 
        required: true, 
    },
    email: { 
        type: String, 
        required: true, 
    },
    password: { 
        type: String, 
        min: 6, 
        max: 12, 
        required: true, 
    }
};

const userSchema = new mongoose.Schema(model);

const userModel = restful.model('User', userSchema);

export default userModel;