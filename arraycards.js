/*Seccion de materiales hecha con Jquery y ajax + boton con get a la info de JSON */
$('body').prepend('<header><div class="logo"><img src="./multimedia/pardo.png"></div><ul><li><a href="./index.html">INICIO</a></li><li><a href="./presupuestos.html">PRESUPUESTOS</a></li><li><a href="./materiales.html">MATERIALES</a></li></ul></header>');
$('body').append('<section><button id="botonGet">Informacion de materiales</button></section>');

$("#botonGet").click(() => {
    $.get("array.json", function (respuesta, estado) {
        if (estado === "success") {
            for (let datos of respuesta) {
                $('body').append(`<div class="card">
        <h2>${datos.nombre}</h2>
        <p>${datos.caracteristicas}</p>
        <p><button><a href="./presupuestos.html">Ingresar medidas</a></button></p>
        </div>`);
        $("#botonGet").fadeOut(10);
            }
        }
    });
});




   