const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    let opt;
    const busquedas = new Busquedas;
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:

            const lugar = await leerInput("Ciudad: ");
            await busquedas.ciudad(lugar)

            //mostrar mensajes

            //buscar los lugares

            //seleccionar el lugar

            //clima

            //mostrar la info

            console.log("Información de la ciudad")
            console.log("Ciudad: ")
            console.log("Latitud: ")
            console.log("Longitud: ")
            console.log("Temperatura: ")
                
            break;
            case 2:
                
            break;
        
            default:
                break;
        }


        if (opt !== 0) await pausa();
    } while (opt !== 0)
}

main();