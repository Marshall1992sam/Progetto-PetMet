const express = require("express");
const kennelController = require("../controllers/kennelController");

const router = express.Router();

//get all media


//post create new media
router.post("/signup", kennelController.create);
router.post("/login", kennelController.login);


module.exports = router;
