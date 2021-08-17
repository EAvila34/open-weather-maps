const inquirer = require("inquirer")
require("colors")

const inquirerMenu = async () => {
    const questions = [
        {
            type: "list",
            name: "options",
            message: "¿Qué deseas hacer?",
            choices: [
                {
                    value: 1,
                    name: "1.- Buscar ciudad"
                },
                {
                    value: 2,
                    name: "2.- Historial"
                },
                {
                    value: 0,
                    name: "0.- Salir"
                }
            ]
        }
    ]
    console.clear();
    console.log("===========================".green)
    console.log("   Seleccione una opción   ".green)
    console.log("===========================".green)
    console.log("\n")

    const { options } = await inquirer.prompt(questions)
    return options;
}

const pausa = async () => {
    const question2 = [
        {
            type: "input",
            name: "pausa",
            message: `Presione ${'ENTER'.green} para continuar \n`
        }
    ]
    await inquirer.prompt(question2)
}

const leerInput = async (message) => {
    const q = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value) {
                if (value.length === 0)
                    return "Por favor ingrese un valor"
                return true;
            }
        }
    ]
    const { desc } = await inquirer.prompt(q)
    return desc;
}

const listarTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${i} descripción: ${tarea.desc}`
        }
    })

    //Añadir opc extra
    choices.unshift({
        value: "0",
        name: "0. Cancelar",
    });

    const borrarPreguntas = [
        {
            type: "list",
            name: "id",
            message: "Borrar",
            choices
        }
    ]
    const { id } = await inquirer.prompt(borrarPreguntas)
    return id;
}

const confirmar = async (message) => {
    const q = [
        {
            type: "confirm",
            name: "ok",
            message
        }
    ];
    const { ok } = await inquirer.prompt(q)
    return ok;
}


const mostrarListadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${i} descripción: ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type: "checkbox",
            name: "ids",
            message: "Seleccione",
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta)
    return ids;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}