
export class Usuarios {
    id: number;
    tipoDoc: String;
    numDoc: number;
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    telefono: number;
    email: string;
    password: string;
    rol: string;
    
    constructor(tipoDoc: String, numDoc: number, nombre: string, apellido: string, nombreUsuario: string, telefono: number, email: string, password: string, rol: string) {
        this.tipoDoc = tipoDoc;
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.telefono = telefono;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}
