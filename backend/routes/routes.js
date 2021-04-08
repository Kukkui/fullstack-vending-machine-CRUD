// import express
import express from "express";

// import function from controller
import {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProductWithPrice,
    mailService
} from "../controllers/product.js";

// init express router
const router = express.Router();

// Get All Product
router.get('/products', showProducts);

// Get Single Product
router.get('/products/:id', showProductById);

// Email Warning Service
router.post('/products/email/:location', mailService);

// Create New Product
router.post('/products', createProduct);

// Update Product
router.put('/products/:id', updateProduct);

// Update Product By Id With New Price Params
router.put('/products/:id/:unit', updateProductWithPrice);

// Delete Product
router.delete('/products/:id', deleteProduct);

// export default router
export default router;