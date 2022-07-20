import {user} from "./data.js"

let root = document.getElementById("root");



const headers = ['NAMES', 'ID', 'EMAIL']
const title = `<h1 style="color:red;">LISTADO DE USUARIOS </h1>`; //Podría ser caption
const table = 
  `<table border="1" cellpadding = "5" cellspacing = "5">
    <tr>
    ${headers.map(names => `<td>${names}</td>`)}
  </tr>
    ${user.map(({name,id,email}) =>
      (
        `
      <tr>
        <td>${name}</td>
        <td>${id}</td>
        <td>${email}</td>
      </tr>
        `
      )
    )}                             
  </table>`
  
document.getElementById('root').innerHTML = title + table;


/*
   Map: Permite iterar sobre un arreglo y modificar sus elementos 
   utilizando una función, donde esta ejecutará cada uno de los elementos del arreglo

   Template Strings: Permite utilizar cualquier expresión válida de JavaScript 
   (table, headers en este caso) dentro de una cadena y obtener como resultado la cadena completa.

   Esta programción con iteraciones con el valor de cada elemento, intercalandolo con las etiquetas que se 
   trabajan las tablas dentro de html, indicando que dentro de tr coloque nombres, id, email y la const headers indica los nombres 
   de cada columna.

*/ 






