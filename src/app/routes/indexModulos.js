const app = require("../../config/server");
const bcryptjs = require('bcryptjs');
const connection = require('../../config/db');

module.exports = app => {
    app.get('/', (req,res) => {
        res.render('../views/index.ejs');
    })

    app.get('/login', (req,res) => {
        res.render('../views/login.ejs');
    })

    app.get('/register', (req,res) => {
        res.render('../views/register.ejs');
    })

    //Solicitudes POST en el registro
    app.post("/register", async (req, res) => {}

/////--------Login------/////////////////
    
function iniciarSesion(event) {

    let vectorPass = [];
    let vectorEmail = [];
    let bandera = false;

    let vector = ['Neiver@gmail.com', 'MateoP@gmail.com', 'MateoR@gmail.com', 'Jairo3@gmail.com'];

    let email = document.getElementById('exampleInputEmail1').value;
    let pass = document.getElementById('exampleInputPassword1').value;

    if (email.length !== 0 && pass.length !== 0) {
        event.preventDefault();

        for (let i = 0; i < email.length; i++) {
            if (email.charCodeAt(i) === 64) {
                bandera = true;
            }
        }

        const data=ValidatorPass(pass);
        
        if (bandera === true && data === true) {
            vectorEmail.push(email);
            vectorPass.push(pass);

            for (const emailS of vector) {
                for (const n of vectorEmail) {
                    if (n === emailS) {
                        alert('El usuario ya se encuentra en el sistema');
                        iniciarSesion(event);
                    }
                }
            }
            
            alert('Inicio de sesión ok, bienvenido a Naturana');
            console.log(vectorEmail);
            console.log(vectorPass);
        } else if (bandera === false) {
            alert('El email no tiene el @, validar');
        }else if (data ===false) {
            alert('La contraseña no cumple con los requisitos recuerde, mínimo 2'
            +' mayúsculas, 3 números');
        }

    } else if (email.length === 0) {
        alert('El email no pueden ir vacido');
    } else if (pass.length === 0) {
        alert('La contraseña no pueden ir vacida');
    }
}


function ValidatorPass(cad){

    let contMayu=0, contNum=0; //contChar=0;

    for (let i = 0; i < cad.length; i++) {

        if (cad.charCodeAt(i)>=65 && cad.charCodeAt(i)<=90) {
            contMayu++;
        }
        if (cad.charCodeAt(i)>=48 && cad.charCodeAt(i)<=57) {
            contNum++;
        }
        // if (cad.charCodeAt(i)===35 || cad.charCodeAt(i)===42) {
        //     contChar++;
        // }
    }
    if (contMayu>=2 && contNum>=3/*&& contChar>=1*/) {
        return true
    }else{
        return false
    }
}


////--------Registrar Pedido------///////////////////
function reciveInfo() {
    
    let id = document.getElementById("id").value;
    let celular = document.getElementById("celular").value;
    let area = document.getElementById("area").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let cargo = document.getElementById("cargo").value;
    let horario = document.getElementById("horario").value;
    let info = document.getElementById("info").value;

    validateData(id,celular,area,nombre,email,cargo,horario,info);
}

let flagEmail=false;
let flagCampEmp=false;

function validateData(id,celular,area,nombre,email,cargo,horario,info) {

    if (id.length!==0 && celular.length!==0 
        && area.length!==0 && nombre.length!==0 && email.length!==0
        && cargo.length!==0 && horario.length!==0 && info.length!==0) 
        {

            const dataEmail = validadorEmail(email);
            const dataCel = validadorCelular(celular);

            if (dataEmail===true && dataCel===true) {
                alert('Información guardado con éxito');
                limpiarCampos();
            }else if (dataEmail===false) {
                alert('Por favor validar el email');
            }else if (dataCel===false) {
                alert('Por favor validar el celular');
            }



    }else if (id.length===0) {
        alert('El campo Número de identificacíon no puede ir vacido');
    }else if (celular.length===0) {
        alert('El campo Celular no puede ir vacido');
    }else if (area.length===0) {
        alert('El campo Área / Operación no puede ir vacido');
    }
    else if (nombre.length===0) {
        alert('El campo Nombre no puede ir vacido');
    }else if (email.length===0) {
        alert('El campo Email Correo puede ir vacido');
    }else if (cargo.length===0) {
        alert('El campo Cargo no puede ir vacido');
    }else if (horario.length===0) {
        alert('El campo Horario en el que te podemos contactar no puede ir vacido');
    }else if (info.length===0) {
        alert('El campo ¿Indícanos donde te encuentras? no puede ir vacido');
    }
}

function validadorEmail(email) {

    for (let i = 0; i < email.length; i++) {
        if (email.charCodeAt(i)===64) {
            flagEmail = true;
        }
    }

    if (flagEmail===false) {
        alert('Recuerde que el correo debe tener una @');
        return false;
    }else if (flagEmail===true) {
        return true;
    }   
}
function validadorCelular(celular) {
    if (celular.NaN || celular.length!==10) {
        alert('Recuerde que el campo de celular debe ser un número / Recuerde que son 10 números');
        return false;
    }else{
        return true;
    }

}
function limpiarCampos(){
    document.getElementById("id").value ="";
    document.getElementById("celular").value ="";
    document.getElementById("area").value ="";
    document.getElementById("nombre").value ="";
    document.getElementById("email").value ="";
    document.getElementById("cargo").value ="";
    document.getElementById("horario").value ="";
    document.getElementById("info").value ="";
}

/////----Registrar usuario------//////

function recibirInfo() {

    let nombre = document.getElementById("Nombre").value;
    let apellidos = document.getElementById("Apellido").value;
    let direccion = document.getElementById("Direccion").value;
    let CdPostal = document.getElementById("CdPostal").value;
    let correo = document.getElementById("Correo").value;
    let cedula = document.getElementById("Cedula").value;
    let celular = document.getElementById("Celular").value;
    let situacion = document.getElementById("Situacion").value;
    let pais = document.getElementById("Pais").value;
    let departamento = document.getElementById("Departamento").value;
    let ciudad = document.getElementById("Ciudad").value;
    let telFijo = document.getElementById("TelFijo").value;
    let DiaN = document.getElementById("DiaN").value;
    let MesN = document.getElementById("MesN").value;
    let AñoN = document.getElementById("AñoN").value;
    let Cargo = document.getElementById("Cargo").value;
    let Horario = document.getElementById("Horario").value;
    let anotaciones = document.getElementById("Anotaciones").value;
    let btn2 = document.getElementById("btn2").value;

    console.log(nombre);

    validarDatos(nombre,apellidos,direccion,CdPostal,correo,cedula,celular,situacion,pais,departamento,ciudad,telFijo,DiaN,MesN,AñoN,Cargo,Horario,anotaciones,btn2);
}

recibirInfo();


function validarDatos(nombre,apellidos,direccion,CdPostal,correo,cedula,celular,situacion,pais,departamento,ciudad,telFijo,DiaN,MesN,AñoN,Cargo,Horario,anotaciones,btn2) {

    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i]) {
        
        }
    }
  
}