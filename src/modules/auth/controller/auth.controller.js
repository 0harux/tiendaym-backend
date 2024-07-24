const User = require('../models/User.model.js');

async function createUser(data){
    const user = new USER(data.nombreCompleto,data.tipoDocumento,data.documento,data.contrasena,data.rol,data.estado,data.correo);

    let userResult;
    try{
        userResult = await user.createUser();
        return userResult; 
    }catch(error){
        if (error.statusCode){
            throw error;    
        }else{
            throw {
                ok: false,
                statusCode: 500,
                data: "Ocurrió un error al ingresar el usuario",
            };
        }
    }

    return{
        message: 'Usuario creado exitosamente',
    };
}

module.exports = {
    createUser,
};