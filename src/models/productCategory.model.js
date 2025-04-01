const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
    status: { type: String }
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
