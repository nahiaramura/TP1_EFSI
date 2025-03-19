document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const mailInput = document.getElementById("mail");
    const contraseñaInput = document.getElementById("contraseña");
    const confirmarContraseñaInput = document.getElementById("confirmar_contraseña");
    const form = document.getElementById("Registrarseform");

    function mostrarMensaje(input, mensaje, esValido) {
        let mensajeElemento = input.nextElementSibling;

        if (!mensajeElemento || !mensajeElemento.classList.contains("mensaje-error")) {
            mensajeElemento = document.createElement("span");
            mensajeElemento.classList.add("mensaje-error");
            input.parentNode.insertBefore(mensajeElemento, input.nextSibling);
        }

        mensajeElemento.textContent = mensaje;
        mensajeElemento.style.color = esValido ? "green" : "red";
        input.style.borderColor = esValido ? "green" : "red";
    }

    function validarNombre() {
        let nombre = nombreInput.value.trim();
        let valido = nombre.length >= 3;
        mostrarMensaje(nombreInput, valido ? "✅ Nombre válido" : "❌ Mínimo 3 caracteres", valido);
        return valido;
    }

    function validarMail() {
        let mail = mailInput.value.trim();
        const mailValido = /^[a-z0-9]+@(gmail|hotmail|outlook|yahoo)\.com$/.test(mail);
        mostrarMensaje(mailInput, mailValido ? "✅ Email válido" : "❌ Formato inválido (usuario@gmail.com)", mailValido);
        return mailValido;
    }

    function validarContraseña() {
        let contraseña = contraseñaInput.value;
        const tieneNumero = /\d/.test(contraseña);
        const tieneLetra = /[A-Za-z]/.test(contraseña);
        const tieneMayuscula = /[A-Z]/.test(contraseña);
        const esValida = contraseña.length >= 8 && tieneNumero && tieneLetra && tieneMayuscula;

        mostrarMensaje(contraseñaInput, 
            esValida ? "✅ Contraseña segura" : "❌ Debe tener 8 caracteres, una mayúscula y un número", 
            esValida
        );

        return esValida;
    }

    function validarSegundaContraseña() {
        let confirmar_contraseña = confirmarContraseñaInput.value;
        let contraseña = contraseñaInput.value;
        let coincide = confirmar_contraseña === contraseña;

        mostrarMensaje(confirmarContraseñaInput, coincide ? "✅ Coinciden" : "❌ No coinciden", coincide);
        return coincide;
    }

    function validarCamposCompletos() {
        return validarNombre() && validarMail() && validarContraseña() && validarSegundaContraseña();
    }

    function validarForm(event) {
        if (!validarCamposCompletos()) {
            event.preventDefault();
        } else {
            alert("Registro exitoso. ¡Bienvenido!");
            form.reset();
        }
    }

    nombreInput.addEventListener("input", validarNombre);
    mailInput.addEventListener("input", validarMail);
    contraseñaInput.addEventListener("input", validarContraseña);
    confirmarContraseñaInput.addEventListener("input", validarSegundaContraseña);
    form.addEventListener("submit", validarForm);
});

function cambiarModoOscuro() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var botones = document.querySelectorAll(".btn");
    
    if (body.classList.contains("dark-mode")) {
        botones.forEach(boton => boton.classList.add("dark-btn"));
    } else {
        botones.forEach(boton => boton.classList.remove("dark-btn"));
    }
}

