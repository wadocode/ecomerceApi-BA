import mongoose from "mongoose";
const vendedorSchema = new mongoose.Schema({
  name:{
    type:String, required
  },
  lastname:{
    type: String, required
  },
  phoneVendedor:{
    type: Number, required
  },
  email:{
    type: String, unique:true,required
  },
  password:{
    type: String, required
  }

})
export default mongoose.model('Vendedor', vendedorSchema)