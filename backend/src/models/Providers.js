/*
coleccion: Providers
campos:
 name 
 telephone
 imagen
 */

 import { Schema, model} from "mongoose"

 const providerSchema = new Schema(
    {
        name: {
            type: String
        },
        telephone:{
            type: String
        },
        image:{
            type: String
        }
    },{
        timestamps: true,
        strict: false
    }
 )
 export default model ("providers", providerSchema)