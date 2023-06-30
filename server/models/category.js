import mongoose from "mongoose";
const Shema = mongoose.Schema;

const categorySchema = new Shema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: String,
    Image: String

})

export default mongoose.model('Category',categorySchema);