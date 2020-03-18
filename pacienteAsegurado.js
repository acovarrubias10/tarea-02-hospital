import Paciente from "./paciente.js";
import Fecha from "./fecha.js";

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNa
     * @param {number} telefono 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({nombre, fechaNa, telefono, numeroPoliza, fechaFinVigencia, compañia}){
        super({nombre, fechaNa, telefono})
        this._numeroPoliza = numeroPoliza
        this._fechaFinVigencia = fechaFinVigencia
        this._compañia = compañia
    }

    getPerfil(){
        return `${this._nombre.getNombreCompleto()}, ${this._fechaNa.getFecha()}, ${this._telefono}, ${this._numeroPoliza}, ${this._fechaFinVigencia.getFecha()}, ${this._compañia}`
    }
}