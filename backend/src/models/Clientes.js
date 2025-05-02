/*
Campos
  name
  lastName
  birthday
  email
  password
  telephone
  dui
  isVerified (esto es booleano)

 */
   import {Schema} from "mongoose"
   import {model} from "mongoose"
   
   
   const ClientesSchema = new Schema({
       name: {
           type: String,
           require: true
         },
       lastname: {
           type: String,
           require: true
       },
       birthday:{
           type: Date,
           require: true
       },
       email:{
          type: String,
          require: true
       },
       password:{
           type:String,
           require: true,
           min:8
       },
       telephone:{
           type: Number,
           require: true,
           min: 8
       },
       dui:{
        type: String,
        require: true,
        min: 10
       },
       isVerified: {
        type: Boolean,
        require: true
       }
   
   },{
       timestamps : true,
       strict: false
   }
   );
   
   export default model("Clientes", ClientesSchema);