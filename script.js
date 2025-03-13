function validarNombre()
{
    let nombre = document.getElementById('nombre').value;
    let valido="true"; 

    if(nombre.length<3)
    {
        valido=false;
    }
    return valido;
}

function validarMail()
{
    const mailValido = /^[a-z0-9]+@(gmail|hotmail|outlook)\.com$/.test(mail);
    return mailValido;

}

function validarContraseña()
{
    let contraseña = document.getElementById('contraseña').value; 
    let confirmar_contraseña = document.getElementById('confirmar_contraseña').value; 
    let contraseña_valida = false; 

    const tieneNumero = /(?:\d)/.test(contraseña); 
    const tieneLetra = /(?:[A-Z])/.test(contraseña) || /(?:[a-z])/.test(contraseña) ; 
    
    if(contraseña.length >= 8 && tieneNumero && tieneLetra && (contraseña==confirmar_contraseña)){
        contraseña_valida=true;

    }

return contraseña_valida;
}

function enviarForm()
{

let nombre=validarNombre();
let mail=validarMail();
let constraseñaValida=validarContraseña();

if(!nombre)
{
    alert('El nombre debe tener minimo 3 caracteres');
}

if(!mail){
    alert('El mail debe tener un formato valido');
}

if (!contraseña_valida) 
{
    alert('Las contraseñas deben ser iguales, contener mayúsculas y caracteres especiales y tener al menos 8 caracteres.');
    return false;
}
Registrarseform.submit();
}
