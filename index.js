//console.log('Bienvenido al Quiz 1 de topicos espaciales: Diseño Web')
/*const http = require('http')
http.createServer(
(req, res) => {
    res.write('Servidor Churista en linea ok')
    res.end()
}
).listen(9000) //crea el servidor y escucha al puerto 9000 */

const express = require('express')

const app = express ()

/*app.post('/', (req, res) => {
    res.json({
        message: 'Este mes no hay churismo prueba con POST'
    })
})

app.get('/otra', (req, res) => {
    res.json({
        message: 'Este mes no hay churismo pero depronto suave'
    })
})*/

//esta funcion suma
app.get('/sumar', (req, res)=> {
    const {a, b} = req.query
    res.json (
        {
            message: `El numero  ${a} mas el numero ${b} igual a ${Number(a) + Number(b)}`
        }
    )
})

//esta funcion resta
app.get('/restar', (req, res)=> {
    const {a, b} = req.query
    res.json (
        {
            message: `El numero  ${a} menos el numero ${b} igual a ${Number(a) - Number(b)}`
        }
    )
})

//esta funcion multiplica
app.get('/multiplicar', (req, res)=> {
    const {a, b} = req.query
    res.json (
        {
            message: `El numero  ${a} multiplicado por el numero ${b} igual a ${Number(a) * Number(b)}`
        }
    )
})

//esta funcion divide

app.get('/dividir', (req, res)=> {
    const {a, b} = req.query
    if (b==0){
        //console.log("aqui entro")
        res.json (
            {    
            message: `Division por cero no es permitida`
            }    
    )
    }else{
        res.json (
            {    
            message: `El numero  ${a} entre el numero ${b} igual a ${(Number(a))/Number(b)}`
            }    
    )

}
}
)
//Aqui verifica que este corriendo el server
app.listen(9000, () => console.log("El servidor esta corriendo en puerto 9000"))