import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"

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
        let pacienteInformacion1 = { 
            nombre: new Nombre("Vanessa", "Covarrubias", "Nava"), 
            fechaNa: new Fecha(25, 2, 2001), telefono: 3121434929
            }

            let paciente1 = new Paciente(pacienteInformacion1)


            let pacienteInformacion2 = { 
            nombre: new Nombre("Vanessa", "Covarrubias", "Nava"), 
            fechaNa: new Fecha(25, 2, 2001), 
            telefono: 3121434929,
            numeroPoliza: 4567,
            fechaFinVigencia: new Fecha(24,2,2023),
            compañia: "IMSS"
            }
            let paciente2 = new PacienteAsegurado(pacienteInformacion2)

        console.log(paciente1.getPerfil())
        console.log(paciente2.getPerfil())
    }


    testDoctor() {
            let doctorInformacion = {
                cedula: "Cedula 1",
                especialidad : "especialidad",
                nombre: new Nombre("Jorge", "Lopez", "Nava"), 
                telefono: 3121456789}

            let doctor = new Doctor(doctorInformacion)
        console.log(doctor.getPerfil())
    }

    testCita() {
        let pacienteInformacion1 = { 
            nombre: new Nombre("Vanessa", "Covarrubias", "Nava"), 
            fechaNa: new Fecha(25, 2, 2001), telefono: 3121434929
            }

        let doctorInformacion = {
            cedula: "Cedula 1",
            especialidad : "especialidad",
            nombre: new Nombre("Jorge", "Lopez", "Nava"), 
            telefono: 3121456789}

        let cita1 = 
        new Cita(new Fecha(26, 3, 2021), 
        new Tiempo(13, 0, "pm"), 
        new Doctor(doctorInformacion), new Paciente(pacienteInformacion1))
        console.log(cita1.getPerfil())
    }

    agregarDoctor() {
        let informacionDoctor1 = {
            cedula: "Cedula1",
            especialidad: "Especialidad", 
            nombre: new Nombre("Jorge", "Lopez", "Nava"), 
            telefono: 3121675789
            }

        let informacionDoctor2 = {
            cedula: "Cedula2",
            especialidad: "Psiquiatra", 
            nombre: new Nombre("Ana", "Landin", "Lopez"),
            telefono: 31245567687
            }

        let informacionDoctor3 = {
            cedula: "Cedula3", 
            especialidad: "Maxilofacial",
            nombre: new Nombre("Brandon", "Zazueta", "Zandoval"), 
            telefono: 3121456778
            }

            let doctor1 = new Doctor(informacionDoctor1)
            let doctor2 = new Doctor(informacionDoctor2)
            let doctor3 = new Doctor(informacionDoctor3) 

        this.hospital.registrarDoctor(doctor1)
        this.hospital.registrarDoctor(doctor2)
        this.hospital.registrarDoctor(doctor3)
        this.hospital.listarDoctores()
    }
    
    agregarCita() {
        let pacienteInformacion1 = { 
            nombre: new Nombre("Vanessa", "Covarrubias", "Nava"), 
            fechaNa: new Fecha(25, 2, 2001), telefono: 3121434929
        }

        let informacionDoctor1 = {
            cedula: "Cedula1",
            especialidad: "Especialidad", 
            nombre: new Nombre("Jorge", "Lopez", "Nava"), 
            telefono: 3121675789
            }


        let cita1 = new Cita(new Fecha(26, 3, 2021), 
        new Tiempo(13, 0, "pm"), 
        new Doctor(informacionDoctor1), 
        new Paciente(pacienteInformacion1))
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