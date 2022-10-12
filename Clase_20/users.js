function user(userJson){
    console.log(userJson);
    const html = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Avatar</th>
    </tr>
  </thead>
  <tbody>
        ${userJson.map(u=>unUser(u)).join('')}
  </tbody>
</table>
`;
return html;
}

function unUser(user){
    const html = `
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${userImage(user.avatar)}</td>
    </tr>
    `;
    return html
}

function userImage(urlImagePath){
    return `<img src="${urlImagePath}">` 
}