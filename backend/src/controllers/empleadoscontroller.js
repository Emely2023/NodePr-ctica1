// Array de métodos ( C R U D)
const empleadoscontroller = {};


import empleadosmodel from "../models/empleados.js";

//SELECT
empleadoscontroller.getEmpleados = async (req, res) => {
const empleados = await empleadosmodel.find()
res.json(empleados)
}

empleadoscontroller.createEmpleados = async (req, res) => {
    const{ name, lastName, birthday,email, address,hireDate,password, telephone, dui, isssNumber, isVerified  } = req.body;
    const newEmpleado = new empleadosmodel ({name, lastName, birthday,email, address,hireDate,password, telephone, dui, isssNumber, isVerified });
    await newEmpleado.save()
    res.json({ message : "Empleado saved"});
}
//DELETE
empleadoscontroller.deleteEmpleados = async (req, res) => {
    await empleadoscontroller.findOneAndDelete(req.params.id)
    res.json({message:"Empleado deleted"})
}

//UPDATE
empleadoscontroller.updateEmpleados = async (req, res) => {
   //  Solicito todos los valores
    const {name, lastName, birthday, email, password, telephone, dui,isVerified} = req.body;

    await empleadosmodel.findByIdAndUpdate(req.params.id,{
        name,
        lastName,
        birthday,
        email,
        address,
        hireDate,
        password,
        telephone,
        dui,
        isssNumber,
        isVerified 
    },{new: true}
);
// muestro un mensaje que todo se actualizó
res.json({ message: "Empleado uptated"});
};
export default empleadoscontroller;