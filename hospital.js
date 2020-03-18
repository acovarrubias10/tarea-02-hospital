import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
import Nombre from "./Nombre.js"
import Paciente from "./Paciente.js"
import Doctor from "./Doctor.js"
import Cita from "./Cita.js"
export default class Hospital{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} direccion
     * @param {Doctor} doctores
     * @param {Cita} citas
     */
    constructor(nombre, direccion){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array()
        this._citas = new Array()
    }

    registrarDoctor(doctor){
        this._doctores.push(doctor)
    }

    listarDoctores(){
        this._doctores.forEach((doctor, i) => {
            console.log(`${i} ${doctor.getPerfil()}`)
        })
    }

    registrarCita(cita){
        this._citas.push(cita)
    }

    listarCitas(){
        this._citas.forEach((cita, i) => {
            console.log(`${i} ${cita.getPerfil()}`)
        })
    }
}