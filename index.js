const fs = require('fs')
const args = process.argv.slice(2)
var datos = {}
var bandera = 0

fs.readFile('employees.csv', 'utf8', function(err, data) {
    if (err) {
        console.log(err.message)
        return;
    }

    datos = data.split('\n').slice(1).map(function(line) {
        var result = {}
        data.split('\n')[0].split(',').forEach(function(header) {
            result[header] = line.split(',')[data.split('\n')[0].split(',').indexOf(header)]
        })
        return result;
    })

    bandera = datos.map((empleado) => {
        empleado.id === args[0] ? bandera++ : ''
    })
    bandera === 0 ? console.log("No existe empleado con ese id") : bandera = 0

    if (args[1] === undefined) {
        datos.forEach(empleado => {
            empleado.id === args[0] ? console.log(empleado) : ''
        })
    } else {
        datos.forEach(empleado => {
            if (empleado.id === args[0]) {
                empleado.hasOwnProperty(args[1]) ? '' : console.log("El empleado no tiene esa propiedad")
                console.log("Su " + args[1] + " es " + empleado[args[1]])
            }
        })
    }
    //console.log(datos.length)
})