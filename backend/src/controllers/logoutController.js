const logoutController = {};

logoutController.logout = async (req, res) => {
    //limpiar las cookies con esto, se borra el token
    res.clearCookie("authToken");

    return res.json({message: "Session Closed"});

};

export default logoutController;