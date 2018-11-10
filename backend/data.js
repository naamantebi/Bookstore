// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
    {
        title: String,
        description: String,
        ISBN_number: String,
        author: String,
        publication_date: Date,
        // Science fiction, Satire, Drama, Action, Romance, Mystery or Horror.
        genre: String,
        price: Number
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);