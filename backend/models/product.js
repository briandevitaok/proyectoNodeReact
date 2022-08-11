const mongoose = require('mongoose');


let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    }, 

    category: {
        type: String,
        required: [true, 'Category is required']
    },
    stock: {
        type:Boolean,
        required: true
    },
    city : {
        type: String,
        required: [true, 'Ciudad is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }



})

module.exports = mongoose.model('Productos', productSchema)