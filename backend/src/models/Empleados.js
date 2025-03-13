/*
  Campos:
  name
  lastName
  birthday (esto es de tipo Date o lo puden poner como String)
  email
  address
  hireDate (esto es de tipo Date o lo puden poner como String)
  password
  telephone
  dui
  isssNumber
  isVerified (esto es booleano)
 */
   import {Schema} from "mongoose"
   import {model} from "mongoose"
   
   const EmpleadosSchema = new Schema({
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
    address:{
       type: String,
       require:true
    },
    hiredate:{
        type: Date,
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
    isssNumber:{
        type: Number,
        require: true
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

export default model("Empleados", EmpleadosSchema);