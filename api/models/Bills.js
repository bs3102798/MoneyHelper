const mongoose = require('mongoose');
const { Schema } = mongoose;

const BillSchema = new Schema({
    name: { type: String, require: true },
    datetime: { type: Date, required: true },
    price: { type: Number, require: true },


    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },


});

const BillModel = mongoose.model("Bill", BillSchema);

module.exports = BillModel