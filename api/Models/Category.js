import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,required
    }, 
    categoryDescription: {
        type: String,required
    }
});

export default mongoose.model('Category', categorySchema)