console.log('Project 5');
let insert = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>Keyname</th>
    <th>Keycode</th>
  </tr>
  <tr>
    <td> </td>
    <td> ${e.code} </td>
    <td> ${e.which} </td>
  </tr>
</table> `;

  console.log(insert.innerHTML);
});
