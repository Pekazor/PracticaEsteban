var fechaActual = new Date(Date.now());
//retorna el dia del mes 1-31
var diaActual = fechaActual.getDate();
//retornar el mes actual , pero parte desde el 0 , enero =0  y diciembre = 11
var mesActual = fechaActual.getMonth() + 1;
//retorna el año de la fecha creada
var añoActual = fechaActual.getFullYear();

var fechaFormateada = diaActual + "/" + mesActual + "/" + añoActual
console.log(fechaFormateada);

document.querySelector('.info__fecha').innerHTML = fechaFormateada;

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    const user = document.getElementById('usuario').value
    const mail = document.getElementById('correo').value
    const password = document.getElementById('contraseña').value

    if(user === ''){
        alert('llene el campo de usuario');
        return;
    }
    if(mail === ''){
        alert('llene el campo de mail');
        return;
        }
     if(password === ''){
        alert('llene el campo de password');
         return;
        }  
    else{
    alert('formulario enviado')
    }
})
