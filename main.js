import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main {
    constructor() {
        this.hospital = new Hospital("Hospital", "IMSS");
    }
    testFecha() {
        let fecha = new Fecha(18, 2, 2023)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha());
    }

    testTiempo() {
        let tiempo = new Tiempo(13, 0, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }

    testNombre() {
        let nombre = new Nombre("Vanessa", "Covarrubias", "Nava")
        console.log(nombre.getNombreCompleto())
        console.log(nombre.getApellidoNombre())
        console.log(nombre.getIniciales())
    }
    testPaciente() {
        let paciente = new Paciente(new Nombre("Vanessa", "Covarrubias", "Nava"), new Fecha(25, 2, 2001), 3121434929)
        console.log(paciente.getPerfil())
    }
    testDoctor() {
        let doctor = new Doctor("Cedula1", "Cirujano", new Nombre("Jorge", "Lopez", "Nava"), 3121456789)
        console.log(doctor.getPerfil())
    }

    testCita() {
        let cita = new Cita(new Fecha(26, 3, 2021), new Tiempo(13, 0, "pm"), new Doctor("Cedula1", "Cirujano", new Nombre("Jorge", "Lopez", "Nava"), 3121456789), new Paciente(new Nombre("Vanessa", "Covarrubias", "Nava")))
        console.log(cita.getPerfil())
    }

    agregarDoctor() {
        let doctor1 = new Doctor("Cedula1", "Especialidad", new Nombre("Jorge", "Lopez", "Nava"), 3121675789)
        let doctor2 = new Doctor("Cedula2", "Psiquiatra", new Nombre("Ana", "Landin", "Lopez"), 31245567687)
        let doctor3 = new Doctor("Cedula3", "Maxilofacial", new Nombre("Brandon", "Zazueta", "Zandoval"), 3121456778)
    
        this.hospital.registrarDoctor(doctor1)
        this.hospital.registrarDoctor(doctor2)
        this.hospital.registrarDoctor(doctor3)
        this.hospital.listarDoctores()
    }
    
    agregarCita() {
        let cita1 = new Cita(new Fecha(26, 3, 2021), new Tiempo(13, 0, "pm"), new Doctor("Cedula1", "Cirujano", new Nombre("Jorge", "Lopez", "Nava"), 3121456789), new Paciente(new Nombre("Vanessa", "Covarrubias", "Nava"), new Fecha(3,4,2001), 3122739451))
        this.hospital.registrarCita(cita1)
        this.hospital.listarCitas()
    }

}

let app = new Main
app.testFecha()
app.testTiempo()
app.testNombre()
app.testPaciente()
app.testDoctor()
app.testCita()
app.agregarDoctor()
app.agregarCita()