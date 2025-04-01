const mongoose = require("mongoose");

const importGoodSchema = new mongoose.Schema({
    id: { type: String },
    nameproduct: { type: String },
    type: { type: String },
    supplier: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    date: { type: String }
});

module.exports = mongoose.model("ImportGood", importGoodSchema);
