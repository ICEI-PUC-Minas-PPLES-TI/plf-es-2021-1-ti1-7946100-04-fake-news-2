var all_users = [];
function getUsuario(email) {
  users = JSON.parse(localStorage.getItem("users"));
  
  if(users != null){
    for (var i = 0; i < users.length; i++){
      if (users[i].email == email){
        return users[i];
      }
    }
  }
  return false;
}

function validarCampos(user, confirmarsenha) {
  let response = {
    message: "VALIDOS"
  };

  if(user.senha != confirmarsenha)
    response.message = 'Senhas nao correspondem.';
  if(user.senha == "")
    response.message = 'Senha invalida.';
  if(user.telefone == "" || user.telefone.length < 11)
    response.message = "Telefone invalido.";
  if(user.email == "")
    response.message = "Email invalido.";
  if(user.nome == "")
    response.message = "Nome invalido.";

  return response;
}

function cadastrarUsuario(user) {
  this.all_users.push(user);
  localStorage.setItem("users", JSON.stringify(all_users));
  alert("Usuario cadastrado");
      document.getElementById("nome").value = "";
      document.getElementById("telefone").value = "";
      document.getElementById("Email").value = "";
      document.getElementById("senha").value = "";
      document.getElementById("confirmarsenha").value = "";
}

$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
});

window.onload = () => {
  signup.onsubmit = (evento) => {
    let user = {
        id: Math.random().toString().substr(2,5),
        nome: nome.value,
        senha: senha.value,
        email: Email.value,
        telefone: telefone.value
    };
    let response = {
      message: ""
    };
    
    if(getUsuario(user.email) != false)
      alert("Usuário já cadastrado");
    else {
      response = validarCampos(user, confirmarsenha.value);
    }
    
    if(response.message == "VALIDOS")
      cadastrarUsuario(user);
    else
      alert(response.message);

    evento.preventDefault();
  };

  signin.onsubmit = (evento) => {
    
    let user = {
      email: email.value,
      senha: password.value
    };
    
    let usuario = getUsuario(user.email);
    
    

    if(usuario != false && user.senha == usuario.senha){
      localStorage.setItem('loggedId', usuario.id);
      //document.getElementById('login-menu').hidden = true;
      //document.getElementById('logout-menu').hidden = false;
      //window.location.href = "http://trustnewsfront.brazilsouth.azurecontainer.io/home/";
      window.location.href = "http://localhost/src/home/index.html";
    }else {
      alert("Usuario ou senha invalido");
    }
    evento.preventDefault();
  };
}


