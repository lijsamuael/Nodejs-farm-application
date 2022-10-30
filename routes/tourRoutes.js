const express = require("express");
const {checkId, checkBody, getTours, getTour, deleteTour, createTour} = require("../controllers/tourController");

const router = express.Router();

router.param('id', checkId)


router.get("/", getTours); 
router.get("/:id", getTour);
router.delete("/:id", deleteTour);
router.post("/", checkBody, createTour);

module.exports = router;