import Fecha from "./fecha.js"
import Nombre from "./nombre.js"

export default class Paciente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNa
     * @param {number} telefono 
     */

    constructor({nombre, fechaNa, telefono}) {
        this._nombre = nombre
        this._fechaNa = fechaNa
        this._telefono = telefono
    }
    
    getTelefono() {
        return this._telefono
    }

    getNombre() {
        return this._nombre.getNombreCompleto()
    }

    getPerfil() {
        return `${this._nombre.getNombreCompleto()}, ${this._fechaNa.getFecha()}, ${this._telefono}`
    }
}