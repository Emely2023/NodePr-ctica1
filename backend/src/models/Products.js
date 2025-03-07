import mongoose, { Model, model, Schema } from "mongoose"

/*
  Campos:
   nombre
   descripción 
   precio
   stock

 */
import {Schema} from "mongoose"
import {Model} from "mongoose"

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
    }

},{
    timestamps : true,
    strict:false
}
);

export default model("Products". productsSchema);