"use strict";

/** Hacer una funcion palabraLargaA que reciba como parametro una cadena de caracteres terminada en un punto y
 * devuelva la longitud de la palabra mas larga que comienza con "a".
 * 1. recorrer la cadena
 * 2. si la palabra empieza con a contar su longitud
 * 3. comparar las longitudes de las palabras de la cadena que comiencen con a
 * 4.imprimir la palabra  que empiece con a y tenga mayor longitud.
 */
var cadena = 'Amasar amarsssssss hay arma que adoraRemos.';

function palabraLargaA(cadena) {
  var indice = 0;
  var palabraMasLarga = '';
  var palabra;
  var longitudPalabra = 0;

  while (cadena[indice] != '.') {
    while (cadena[indice] == ' ') {
      indice++;
    }

    palabra = ''; // se obtiene la palabra completa

    while (cadena[indice] != ' ' && cadena[indice] != '.') {
      palabra = palabra + cadena[indice];
      indice++;
    } //comprabamos la letra de inicio


    if (palabra[0] == 'a' || palabra[0] == 'A') {
      if (palabra.length > longitudPalabra) {
        longitudPalabra = palabra.length;
        palabraMasLarga = palabra;
      }
    }
  }

  return longitudPalabra;
}

console.log(palabraLargaA(cadena));