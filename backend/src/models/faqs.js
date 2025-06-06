/* 
Coleccion: Frecuency answer and question
campos
question
answer
level
isActive
*/

import {Schema , model} from "mongoose";

const faqsSchema = new Schema(
    {
        question:{
            type: String,
            required:true,
            minLenght: 4,
            maxLenght:100,
            trim:true
        },
        answer:{
            type: String,
            required:true,
            minLenght: 4,
            maxLenght:100,
            trim:true
        },
        level:{
            type: Number,
            required:true,
            min: 1,
            max:10,
            trim:true
        },
        isActive:{
            type: Boolean,
            required:true,
            default:true
        }
    },{
        timestamps : true,
        strict:false
    }
    );

export default model ("faqs", faqsSchema);