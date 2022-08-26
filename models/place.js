const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const PlaceModel = mongoose.model("Place", placeSchema);
module.exports = PlaceModel;