import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  name:{
    type:String, required
  },
  lastname:{
    type: String, required
  },
  phoneAdmin:{
    type: Number, required
  },
  email:{
    type: String, unique:true,required
  },
  password:{
    type: String, required
  }

})
export default mongoose.model('Admin', adminSchema)