const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maravilhosaSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo de dado
        auto: true, // autogerado??
        required: true // é obrigatório??
    },
    id:{
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
        //unique: true caso for um dado único posso usar 
    },
    photo: {
        type: String,
        require: true
    },
    subtitle:{
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
    phrase: {
        type: String,
        require: true
    },
    history: [{
        type: String,
        require: true
    }],
    addedBy:{
        type: String,
        require: true
    }
},
    {collection: 'maravilhosa'}
);

const maravilhosaCollection = mongoose.model('maravilhosa', maravilhosaSchema); //depende de maravilhosa Schema

module.exports = {maravilhosaCollection}