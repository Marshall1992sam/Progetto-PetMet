const express = require("express");
const adoptionController = require("../controllers/adoptionController");

const router = express.Router();

//get all media
router.get("/all", adoptionController.getAll);

//post create new media
router.post("/create", adoptionController.create);
router.delete("/delete/:id", adoptionController.delete);

module.exports = router;
