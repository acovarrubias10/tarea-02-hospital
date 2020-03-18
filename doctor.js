import Nombre from "./nombre.js"

export default class Doctor {
    /**
     * 
     * @param {string} cedula Cedula donde trabaja
     * @param {string} especialidad Especialidad
     * @param {Nombre} nombre Nombre del doctor
     * @param {number} telefono Telefono del doctor
     */

    constructor({cedula, especialidad, nombre, telefono}) {
    this._cedula = cedula
    this._especialidad = especialidad
    this._nombre = nombre
    this._telefono = telefono
}

getApellido1() {
    return this._nombre.apellido1()
}

getPerfil() {
    return `${this._cedula}, ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`
}
}
