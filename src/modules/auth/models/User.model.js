const getConnection = require('../../../interface/DBconn.js');

class User {
    persona(nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo) {
        this.nombreCompleto = nombreCompleto;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
        this.contrasena = contrasena;
        this.rol = rol;
        this.estado = estado;
        this.correo = correo;
    }

    async createUser(){
        const connection= await getConnection();
        try{
            const [result] = await connection.query(
            `INSERT INTO usuarios 
            (NOMBRE_COMPLETO,TIPO_DOCUMENTO,DOCUMENTO,CONTRASENA,ROL,ESTADO,CORREO)
            VALUES (?,?,?,?,?,?,?)`,
            [this.nombreCompleto, this.tipoDocumento, this.documento,this.contrasena,this.rol,this.estado,this.correo]
            );

            const userId = result.insertId;

            return {id: userId};

        }catch(error){
            console.log(error);
            throw{
                ok:false,
                statusCode:500,
                data: 'Ocurrió un error al insertar el usuario'
            }
        }finally{
            connection.release();
        }
    }

}
