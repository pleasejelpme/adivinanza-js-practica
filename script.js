let numero = Math.ceil(Math.random()*19)
let numero_in = document.getElementById('numero_in')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numero_ingresado = parseInt(numero_in.value)

    if (numero_ingresado < 1 || numero_ingresado > 20 || isNaN(numero_ingresado)) {
        mensaje.textContent = 'Ingresa un numero valido entre 1 y 20'
        mensaje.style.color = 'red'
        return
    }

    if (numero_ingresado > numero) {
        mensaje.textContent = 'Muy alto'
        mensaje.style.color = 'red'
    } else if (numero_ingresado < numero) {
        mensaje.textContent = 'Muy bajo'
        mensaje.style.color = 'red'    
    } else {
        mensaje.textContent = 'Adivinaste!'
        mensaje.style.color = 'green'
        numero_in.disabled = true               
    }
}