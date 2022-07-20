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


      /****TRABAJAR TABLA DE USUARIOS CON PROGRAMACIÓN *******/ 

/*let title = '<h1 style="color:red;">' + 'LISTADO DE USUARIOS' +  '</h1>';


let table = '<table border="1">' + 
               '<tr>' +
                  '<td>' + 'NAMES' + '</td>' +
                  '<td>' +  'ID'   + '</td>' +
                  '<td>' + 'EMAIL' + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[0].name  + '</td>' +
                  '<td>' + user[0].id    + '</td>' +
                  '<td>' + user[0].email + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[1].name  + '</td>' +
                  '<td>' + user[1].id    + '</td>' +
                  '<td>' + user[1].email + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[2].name   + '</td>' +
                  '<td>' + user[2].id     + '</td>' +
                  '<td>' + user[2].email  + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[3].name   + '</td>' +
                  '<td>' + user[3].id     + '</td>' +
                  '<td>' + user[3].email  + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[4].name   + '</td>' +
                  '<td>' + user[4].id     + '</td>' +
                  '<td>' + user[4].email  + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[5].name   + '</td>' +
                  '<td>' + user[5].id     + '</td>' +
                  '<td>' + user[5].email  + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[6].name   + '</td>' +
                  '<td>' + user[6].id     + '</td>' +
                  '<td>' + user[6].email  + '</td>' +     
               '</tr>' +
               
               '<tr>' +
                  '<td>' + user[7].name   + '</td>' +
                  '<td>' + user[7].id     + '</td>' +
                  '<td>' + user[7].email  + '</td>' +     
               '</tr>' +

               '<tr>' +
                  '<td>' + user[8].name   + '</td>' + 
                  '<td>' + user[8].id     + '</td>' +
                  '<td>' + user[8].email  + '</td>' +     
               '</tr>' +
               
               '<tr>' +   
                  '<td>' + user[9].name   + '</td>' +
                  '<td>' + user[9].id     + '</td>' +
                  '<td>' + user[9].email  + '</td>' +     
               '</tr>' +

            '</table>';


   root.innerHTML = title + table;*/

 



   
