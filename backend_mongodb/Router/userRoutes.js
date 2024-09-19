const usecontoller = require("../Controller/userContoller");
const express = require("express");
const router = express.Router();
router.post("/adduser", usecontoller.insertData);
router.post("/signin", usecontoller.getUser);
router.get("/getalluser", usecontoller.getAllUser);
module.exports = router;
