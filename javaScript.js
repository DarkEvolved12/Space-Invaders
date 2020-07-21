let colors = ['blue', 'yellow', 'white', 'red', 'brown', 'orange', 'purple', 'aquamarine' ]
let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let contenedor = document.getElementById('contenedor')
    contenedor.style.background = randomColor
})