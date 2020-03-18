
export default class Fecha {
    /**
     * 
     * @param {number} dia dia del año
     * @param {number} mes mes del año
     * @param {number} año año del año
     */

    constructor(dia, mes, año = new Fecha(18, 2, 2023)) {
        this._fecha = new Date(año, mes, dia)

        this._diaSemana = ["Domingo,", 
        "Lunes", 
        "Martes", 
        "Miercoles", 
        "Jueves", 
        "Viernes", 
        "Sábado"]

        this._nombreMes = ["Ene", 
        "Feb", 
        "Mar", 
        "Abr", 
        "May", 
        "Jun", 
        "Jul", 
        "Ago", 
        "Sep", 
        "Oct", 
        "Nov", 
        "Dic"]
    }

    getAños() {
        let años = this._fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return años
    }

    getMeses() {
        return this.getAños() * 12
    }
    getSemanas() {
        return this.getMeses() * 4
    }
    getDias(){
        return this.getSemanas() * 7
    }
    getFecha(){
        let fechaFormato = `${this._fecha.getDate()}/${this._nombreMes[this._fecha.getMonth()-1]}/${this._fecha.getFullYear()}`
        return fechaFormato
    }
    getDiaFecha(){
        let diaF = this._diaSemana[this._fecha.getDay()]
        return diaF
    }
}
