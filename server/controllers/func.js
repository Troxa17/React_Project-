import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import Category from '../models/category.js'
import Product from '../models/product.js'
import category from "../models/category.js";

router.post('/add_new_product',async(req,res) => {

    const {productName,productImage,productPrice,unitInStock,categoryId} = req.body
    const id = new mongoose.Types.ObjectId; 

    const _product = new Product({
        _id:id,
        productName:productName,
        productImage:productImage,
        productPrice:productPrice,
        unitInStock:unitInStock,
        categoryId:categoryId
    })
    _product.save()
    .then(product => {
        return res.status(200).json({
            message:product
        })

    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.get('/get_all_categories',async(req,res) => {

    Category.find()
    .then(category => {
        return res.status(200).json({
            message:category
    })   
 })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.post('/add_new_category',async (req,res) => {

    const {categoryName,Image} =req.body;
    const id = new mongoose.Types.ObjectId;   

    const _category = new Category({

        _id: id,
        categoryName:categoryName,
        Image:Image
    })
    _category.save()
    .then(category => {
        return res.status(200).json({
            message:category
        })

    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.get('/get_all_products', async (req,res) => {

    Product.find()
    .populate("categoryId")
    .then(products => {
        return res.status(200).json({
            message:products
    })   
 })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})


router.put('/update_product_by_id/:pid',async(req,res) => {

    const productId = req.params.pid;
    const {productName,productImage,productPrice,unitInStock,categoryId} = req.body;

    Product.findById(productId)
    .then(product => {

        product.productName = productName;
        product.productImage = productImage;
        product.productPrice = productPrice;
        product.unitInStock = unitInStock;
        product.categoryId = categoryId;

        product.save()
        .then(product_update => {
            return res.status(200).json({
                message: product_update
            })
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.delete('/delete_product_by_id/:pid',async(req,res) => {

    const productId = req.params.pid;
    Product.findByIdAndDelete(productId)

    .then(product => {
        return res.status(200).json({
            message: 'Product Removed'
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.get('/get_product_by_id/:pid',async(req,res) => {

    const productId = req.params.pid;
    Product.findById(productId)
    .populate("categoryId")
    .then(products => {
        return res.status(200).json({
            message:products
        })   
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.post('/get_product_by_name',async(req,res) => {

    const query = req.body.query;
    Product.find({productName: query})
    .populate("categoryId")
    .then(products => {
        return res.status(200).json({
            message:products
        })   
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})


export default router;