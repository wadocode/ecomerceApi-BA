import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
  name:{
    type: String, required
  },
  lastname:{
    type: String, required
  },
  address:{
    type: String, required
  },
  street:{
    type: String, required
  },
  location:{
    type: String, required
  },
  numExterior :{
    type: String, required
  },
  numInterior:{
    type: String
  },
  entreCalles:{
    type: String, required
  },
city:{
  type: String, required
},
country:{
  type: String, required
},
zipCode:{
  type: Number, required
},
referencia:{
  type: String, required
},
email:{
  type: String, unique:true,required
},
password:{
  type: String, required
},
phoneUser:{
  type: Number, required
},
contactosPersonales:{
  type: String, required
}
        
})

export default mongoose.model('User', userSchema)