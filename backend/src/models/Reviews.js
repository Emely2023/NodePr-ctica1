/*
Campos: 

    comment
    rating
    idCliente
*/

import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    comment:{
        type:String,
        require: true
    },
    rating:{
        type: Number,
        require: true,
        max: 5
    },
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: "Clientes",
        require: true,
    },

},
{
    timestamps: true,
    strict: false,
}
);

export default model ("Reviews", reviewSchema);