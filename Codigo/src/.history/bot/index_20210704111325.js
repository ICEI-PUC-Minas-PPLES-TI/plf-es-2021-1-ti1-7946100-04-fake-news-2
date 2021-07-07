function validarCampos(user, confirmarsenha) {
  let response = {
    message: "VALIDOS"
  };

  if(user.telefone == "" || user.telefone.length < 11)
    response.message = "Telefone invalido.";
  if(user.nome == "")
    response.message = "Nome invalido.";

  return response;
}

function cadastrarUsuario(user) {
  localStorage.setItem(Math.random().toString().substr(2,5), JSON.stringify(user));
  alert("Usuario cadastrado");
      document.getElementById("nome_bot").value = "";
      document.getElementById("telefone_bot").value = "";
}

$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
});

window.onload = () => {
  signup.onsubmit = (evento) => {
    let user = {
        nome: nome.value,
        telefone: telefone.value
    };
    let response = {
      message: ""
    };
    if(getUsuario(user.telefone) != false)
      alert("Telefone já cadastrado");
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
    

    if(usuario != false && user.senha == usuario.user.senha){
      localStorage.setItem('loggedId', usuario.id);
      document.getElementById('login-menu').hidden = true;
      document.getElementById('logout-menu').hidden = false;
      //window.location.href = "http://trustnewsfront.brazilsouth.azurecontainer.io/home/";
      window.location.href = "http://localhost/src/home/index.html";
    }else {
      alert("Usuario ou senha invalido");
    }
    evento.preventDefault();
  };
}