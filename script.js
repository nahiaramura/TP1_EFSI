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
    let mail=document.getElementById('mail').value;
    const mailValido = /^[a-z0-9]+@(gmail|hotmail|outlook)\.com$/.test(mail);
    return mailValido;

}

function validarContraseña() {
    let contraseña = document.getElementById('contraseña').value;

    const tieneNumero = /\d/.test(contraseña);
    const tieneLetra = /[A-Za-z]/.test(contraseña);
    const tieneMayuscula = /[A-Z]/.test(contraseña); 

    return contraseña.length >= 8 && tieneNumero && tieneLetra && tieneMayuscula;
}

function validarSegundaContraseña(){
    let confirmar_contraseña = document.getElementById('confirmar_contraseña').value;
    let contraseña = document.getElementById('contraseña').value;
    
    if(confirmar_contraseña!=contraseña){
        return false;
    }
    return true;
}

function validarCamposCompletos() {
    let nombre = document.getElementById('nombre').value.trim();
    let mail = document.getElementById('mail').value.trim();
    let contraseña = document.getElementById('contraseña').value.trim();
    let confirmar_contraseña = document.getElementById('confirmar_contraseña').value.trim();

    if (nombre === "" || mail === "" || contraseña === "" || confirmar_contraseña === "") {
        alert("Todos los campos deben estar completos.");
        return false;
    }
    return true;
}

function validarForm() {
    
    if (!validarCamposCompletos()) {
        return false;
    }

    if (!validarNombre()) {
        alert('El nombre debe tener mínimo 3 caracteres');
        return false;
    }

    if (!validarMail()) {
        alert('El mail debe tener un formato válido (ejemplo: usuario@gmail.com)');
        return false;
    }

    if (!validarContraseña()) {
        alert('La contraseña debe contener al menos una mayúscula, un número y tener al menos 8 caracteres.');
        return false;
    }
    if (!validarSegundaContraseña()) {
        alert('Las contraseñas deben ser iguales.');
        return false;
    }

    alert("Registro exitoso. ¡Bienvenido!");
    document.getElementById("Registrarseform").reset();
    return true;  
}

