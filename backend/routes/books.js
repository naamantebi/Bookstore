const express = require("express");
const Data = require("./../data");

module.exports = function() {
    const router = express.Router();

    router.get("/getData", (req, res) => {
        Data.find((err, data) => {
            console.log(data);
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        });
    });


    router.delete("/deleteData", (req, res) => {
        const { id } = req.body;
        Data.findOneAndDelete(id, err => {
            if (err) return res.send(err);
            return res.json({ success: true });
        });
    });

    router.post("/putData", (req, res) => {
        let data = new Data();
        const { title, description, ISBN_number , author, publication_date, genre, price} = req.body;

        if (!title || !author) {
            return res.json({
                success: false,
                error: "INVALID INPUTS"
            });
        }
        data.title = title;
        data.description = description;
        data.ISBN_number = ISBN_number;
        data.author = author;
        data.publication_date = publication_date;
        data.genre = genre;
        data.price = price;
        data.save(err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    });
    return router;
}
