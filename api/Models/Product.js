import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  productName:{
    type:String, required
  },
  description:{
    type: String, required
  },
  especificaciones:[{
    size:{ type:Number},
    peso:{type: Number}
  }],
  category:{
    type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', required
  },
 price:{
    type: Number, unique:true,required
  },
  stock:{
    type: Number, required
  },
  photo:{
    type: String,required
  }

})
export default mongoose.model('product', productSchema)