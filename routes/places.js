const express = require("express");
const router = express.Router();
const PlaceModel = require("../models/place");

router.get("/", async (req, res) => {
    try {
        const list = await PlaceModel.find({});
        return res.status(200).json(list);
    } catch (error) {
        res.status(500).send({ message: error });
    }
});

router.post("/", async (req, res) => {
    // console.log(req.body)
    const { name, city, state } = req.body;
    if (!name || !city || !state) {
        return res.status(400).send({ message: "All fields are required." });
    }

    const slug = name.slice().toLowerCase().split(" ").join("-");
    const newPlace = new PlaceModel({
        name,
        slug,
        city,
        state,
    });

    try {
        const savedPlace = await newPlace.save();
        return res
            .status(201)
            .send({ message: "Ad created with id: " + savedPlace.id });
    } catch (error) {
        return res.status(501).send({ message: error.message });
    }
});

router.get("/:slug", async (req, res) => {
    const slug = req.params.slug;
    const result = await PlaceModel.findOne({ slug: slug });
    if (!result) {
        return res.status(400).send({ message: "No matching place found." });
    } else {
        return res.status(200).json(result);
    }
});

router.get("/search/name/:string", async (req, res) => {
    const string = req.params.string;
    const regex = new RegExp(`${string}`, "gi");
    const result = await PlaceModel.find({ name: regex });
    if (!result) {
        return res.status(400).send({ message: "No matching place found." });
    } else {
        return res.status(200).json(result);
    }
});

router.get("/search/city/:string", async (req, res) => {
    const string = req.params.string;
    const regex = new RegExp(`${string}`, "gi");
    const result = await PlaceModel.find({ city: regex });
    if (!result) {
        return res.status(400).send({ message: "No matching place found." });
    } else {
        return res.status(200).json(result);
    }
});

module.exports = router;
