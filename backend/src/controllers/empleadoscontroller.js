import empleadosmodel from "../models/Empleados.js";

// Array de métodos (C R U D)
const empleadoscontroller = {};

// GET
empleadoscontroller.getEmpleados = async (req, res) => {
  try {
    const empleados = await empleadosmodel.find();
    res.json(empleados);
  } catch (error) {
    console.error("Error getting empleados:", error);
    res.status(500).json({ message: "Error fetching empleados" });
  }
};

// POST
empleadoscontroller.createEmpleados = async (req, res) => {
  try {
    const {
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
      isVerified,
    } = req.body;

    const newEmpleado = new empleadosmodel({
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
      isVerified,
    });

    await newEmpleado.save();
    res.json({ message: "Empleado saved" });
  } catch (error) {
    console.error("Error creating empleado:", error);
    res.status(500).json({ message: "Error saving empleado" });
  }
};

// DELETE
empleadoscontroller.deleteEmpleados = async (req, res) => {
  try {
    await empleadosmodel.findByIdAndDelete(req.params.id);
    res.json({ message: "Empleado deleted" });
  } catch (error) {
    console.error("Error deleting empleado:", error);
    res.status(500).json({ message: "Error deleting empleado" });
  }
};

// UPDATE
empleadoscontroller.updateEmpleados = async (req, res) => {
  try {
    const {
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
      isVerified,
    } = req.body;

    await empleadosmodel.findByIdAndUpdate(
      req.params.id,
      {
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
        isVerified,
      },
      { new: true }
    );

    res.json({ message: "Empleado updated" });
  } catch (error) {
    console.error("Error updating empleado:", error);
    res.status(500).json({ message: "Error updating empleado" });
  }
};

export default empleadoscontroller;
