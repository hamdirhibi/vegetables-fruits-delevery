const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/Product");
const checkAuth = require("../middleware/checkAuth");
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname);
  },
});

const upload = multer({
  storage: storage,
});


router.get("/", checkAuth,  ProductController.Product_findAll);
router.get("/getOne/:productId", checkAuth,  ProductController.Product_findOne);
router.post("/addProduct", checkAuth, upload.any() ,  ProductController.Product_save);
router.delete("/deleteProduct/:productId", checkAuth,  ProductController.Product_delete);
router.patch("/updateProduct/:productId", checkAuth, upload.any() ,  ProductController.Product_update);
router.delete("/deleteAllProduct/", checkAuth ,  ProductController.Product_deleteAll);

module.exports = router ; 
