import mongoose from "mongoose";
const Shema = mongoose.Schema;

const productSchema = new Shema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: String,
    productImage: String,
    productPrice: Number,
    unitInStock: Number,
    createdAt: {type:String, default: Date.now},

    categoryId: {type:mongoose.Schema.Types.ObjectId, ref:'Category'}
})

export default mongoose.model('Product',productSchema);