/*
coleccion: Providers
campos:
 name 
 year
 slogan
 imagen
 */

 import { Schema, model} from "mongoose"

 const BrandsSchema = new Schema(
    {
        name: {
            type: String
        },
        year:{
            type: String
        },
        slogan:{
            type: String
        },
        imagen:{
            type: String
        }
    },{
        timestamps: true,
        strict: false
    }
 )
 export default model ("Brands", BrandsSchema)