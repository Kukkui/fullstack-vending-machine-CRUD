// const nodemailer = require('nodemailer');
// Import function from Product Model
import { getProducts, getProductById, insertProduct, updateProductById, deleteProductById, updateProductWithPriceById } from "../models/productModel.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//Email Sent
export const mailService = (req, res) => {
    const location = req.params.location;
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'punyaweeposdev@gmail.com',
            pass: 'Punyaweeposdev1234'
        }
    });

    console.log('created');
    transporter.sendMail({
        from: 'punyaweeposdev@gmail.com',
        to: 'kukkui2537@gmail.com',//ENTER ADMIN EMAIL HERE
        subject: 'SCG STOCK WARNING!!!',
        text: `Some products in the vending machine at ${location} is mostly out of stock!(Left only 10). Please add more items to the vending machine!`
    });
    res.send('EMAIL SENT')
}

// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Product
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Product
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Product
export const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Product With Price
export const updateProductWithPrice = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    const unit = req.params.unit;
    updateProductWithPriceById(data, unit, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Product
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}