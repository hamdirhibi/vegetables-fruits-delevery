const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/Order");
const checkAuth = require("../middleware/checkAuth");


router.get("/", checkAuth,  OrderController.Order_findAll);
router.post("/addOrder", checkAuth,  OrderController.Order_save);

module.exports = router ; 
