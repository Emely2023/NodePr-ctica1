
/*
  Campos:
   nombre
   descripción 
   precio
   stock

 */
import {Schema} from "mongoose"
import {model} from "mongoose"

const productsSchema = new Schema({
    name: {
        type: String,
        require: true
      },
    description: {
        type: String
    },
    price:{
        type:Number,
        require: true,
        min:0
    },
    stock:{
        type: Number,
        require: true,
        min: 0
    },
     imagen:{
            type: String
        }

},{
    timestamps : true,
    strict:false
}
);

export default model("Products", productsSchema);