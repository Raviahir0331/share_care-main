// routes/complaintRoutes.js
const express = require("express");
const { submitComplaint, getAllComplaints,updateComplaint,deleteComplaint } = require("../Controller/complainController");

const router = express.Router();

// POST route to submit a complaint
router.post("/complaints", submitComplaint);

// GET route to fetch all complaints
router.get("/complaints", getAllComplaints);
router.put('/complaints/:id', updateComplaint);
router.delete('/complaints/:id', deleteComplaint);


module.exports = router;
