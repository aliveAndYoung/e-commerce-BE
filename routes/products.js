const express = require("express");
const getSingleProduct = require("../controllers/products/getSingleProduct");
const getAllProducts = require("../controllers/products/getAllProducts");
const addProduct = require("../controllers/products/addProduct");
const editProduct = require("../controllers/products/editProduct");
const deleteProduct = require("../controllers/products/deleteProduct");
const getProductsByCategory = require("../controllers/products/getProductsByCategory");

const router = express.Router();

router.get("/getAll", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", addProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);
router.get("/category/:category", getProductsByCategory);

module.exports = router;
