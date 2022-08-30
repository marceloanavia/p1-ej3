"use strict";

/* TODO */
var nota;
var confirmar;
var aprobados = 0;
var desaprobados = 0;
var promocionados = 0;

var contador = 0;
var min = 0;
var max = 0;

do {
    nota = parseInt(prompt("Ingresar nota"));
    if (nota >= 7){
        aprobados++;
        promocionados++;

    } else if (nota >= 4){
        aprobados++;

    } else {
        desaprobados++;

    }
    if (contador == 0){
        min = nota;
        max = nota;
        contador++;
    } else {
        if (nota > max) {
            max = nota;
        } else if (nota < min){
            min = nota;
        }
    }
    confirmar = confirm("¿Seguir introduciendo notas?");
} while(confirmar == true)





alert(`El promedio de alumnos promocionados es ${promocionados}, el promedio de aprobados es ${aprobados} y el promedio de desaprobados es ${desaprobados}`);
alert(`El valor máximo de nota es ${max} y el mínimo es ${min}`);