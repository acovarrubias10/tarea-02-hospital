export default class Tiempo {
    constructor(hora, minuto, periodo = ""){
        this._hora = hora
        this._minuto = minuto
        this._periodo = periodo.toLowerCase()
    }
    getFormato12() {
        if (this._periodo === "am" && this._hora==12){
            return `${this._hora - 12}:${this._minuto} ${this._periodo}`
        }
        else if (this._periodo === "pm" && this._hora>12){
            return `${this._hora - 12}:${this._minuto} ${this._periodo}`
        }
        else if (this._periodo == "am" && this._hora==24){
            return `${this._hora - 24}:${this._minuto} ${this._periodo}`
        }
        else{
            return `${this._hora}:${this._minuto} ${this._periodo}`
        }
    }
    getFormato24() {
        if (this._periodo == "am" && this._hora==12){
            return `${this._hora - 12}:${this._minuto} ${this._periodo}`
        }
        else if (this._periodo == "am" && this._hora==24){
            return `${this._hora - 24}:${this._minuto} ${this._periodo}`
        }
        else if (this._periodo == "pm" && this._hora<12){
            return `${this._hora + 12}:${this._minuto} ${this._periodo}`
        }
        else{
            return `${this._hora}:${this._minuto} ${this._periodo}`
        }
    }
}