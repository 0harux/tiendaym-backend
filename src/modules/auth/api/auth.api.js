const ResponseBody = require("../../../shared/model/responseBody.model.js");
const { createUser } = require("../controller/auth.controller.js");

const createUserAPI= async (req, res) => {
    let { nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo } = req.body;

    if(!nombreCompleto || !tipoDocumento || !documento || !contrasena || !rol || !estado || !correo)
{
        return res.status(400).send(new ResponseBody(400, 'Los campos son requeridos'))
    }

    let message;

    try{
        let response = await createUser({nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo});
        message = new ResponseBody(true,200, response)
    }catch(error){
        if(error.statusCode){
            message = ResponseBody(false,error.statusCode,error.data);
        } else {
        console.log(error);
        message=new ResponseBody(false,500,'Ocurrió un error al insertar el usuario');
        }
    }
};


module.exports = {
    createUserAPI,

};