¿Cómo hicimos el formulario?
Este es nuestro primer trabajo del año con JavaScript, así que empezamos con lo básico: hacer un formulario que funcione bien y que no deje que la gente ponga cualquier cosa. La idea era que fuera fácil de usar y que guiara a quien lo complete. Por eso, pusimos etiquetas (<label>) para que se entienda qué va en cada casilla y también agregamos placeholder para que el usuario tenga una idea de qué escribir.
Como no usamos el required en HTML nos costó un poco ya wue etsbamos acostumbradas a usarlo siempre y ni pensar como validar que todos los campos se completen, pero al final salió bien.

Validaciones y cómo funcionan
Para que los datos sean correctos antes de enviar el formulario, hicimos varias validaciones con JavaScript:
Verificamos que todos los campos estén llenos. Si alguno está vacío, mostramos un alert() diciendo que falta completar los datos.
El nombre tiene que tener al menos 3 caracteres. Así evitamos nombres como “A” o “B”.
El correo tiene que ser válido. Usamos una expresión regular para aceptar solo correos que terminen en gmail.com, hotmail.com o outlook.com.
La contraseña debe tener:
- Mínimo 8 caracteres.
- Al menos un número.
- Al menos una mayúscula.
- Debe coincidir con la confirmación de contraseña.

Problemas y cómo los resolvimos
Como es la primera vez despues de mucho tiempo que hacemos algo con JavaScript, nos costo ponernos al dia:
- El formulario se enviaba aunque los campos estuvieran vacíos. Al principio confiábamos en required, pero al sacarlo, el formulario se podía mandar vacío. Lo solucionamos con validarCamposCompletos().
- La validación de la contraseña no chequeaba mayúsculas. La primera versión solo pedía números y letras, pero faltaba asegurarnos de que hubiera al menos una mayúscula. Agregamos /[A-Z]/.test(contraseña) y eso lo solucionó.
- Teniamos que hacer que apareciera un mensaje de confirmación. Después de validar todo, agregamos un alert() que dice “Registro exitoso. ¡Bienvenido!” y usamos .reset() para limpiar el formulario.

¿Qué mejoraríamos si tuviéramos más tiempo?
Mostrar los errores en pantalla en vez de alert(). Por ejemplo, podríamos agregar mensajes debajo de cada campo.
Ahorrar codigo demas, quisimos hacer todas las validaciones en diferentes funciones para que sea mas "prolijo" pero no sabemos si convenia hacerlo asi o con una sola funcion que valide todo, como para no repetir la creacion de algunas variables.
Guardar los datos temporalmente. 
