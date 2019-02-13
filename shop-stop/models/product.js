const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const productShema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: {
        type: Number,
        min: 0,
        max: Number.MAX_VALUE,
        default: 0
    },
    image: { type: String },
    category: { type: objectId, ref: 'Category' },
    isBought: { type: Boolean, default: false }
});

let Product = mongoose.model('Product', productShema);

module.exports = Product;