var cadastro_bot = [];
$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
});

function save_cadastro_bot(){
  let nome = document.getElementById("nome_bot").value;
  let telefone = document.getElementById("telefone_bot").value;
  let categoria1 = document.getElementById("categoria1_bot").checked;
  let categoria2 = document.getElementById("categoria2_bot").checked;
  let categoria3 = document.getElementById("categoria3_bot").checked;
  let categoria4 = document.getElementById("categoria4_bot").checked;
  let aceito = document.getElementById("aceito").checked;
  
  var values_json = { 
      'nome': nome,
      'telefone': telefone,
      'categoria1': categoria1,
      'categoria2': categoria2,
      'categoria3': categoria3,
      'categoria4': categoria4,
      'aceito': aceito
  }

  if(aceito){
    this.cadastro_bot.push(values_json);

    localStorage.setItem("cadastro_bot", JSON.stringify(cadastro_bot));
    
    alert("Número cadastrado com sucesso, você receberá as notícias assim que o bot estiver disponível!");

    this.clearFields();
  }else{
    alert("Necessário aceitar receber as notícias/fake news das categorias selecionadas no WhatsApp");
  }
  
}

function clearFields(){
  document.getElementById("nome_bot").value = "";
  document.getElementById("telefone_bot").value = "";
}


function check_is_logged(){
  console.log("check");
  if(localStorage.getItem("to_edit") != null  localStorage.getItem('loggedId') != null){
    console.log("check2");
    document.getElementById('login-menu').hidden = true;
    console.log("check3");
    document.getElementById('logout-menu').hidden = false;
    console.log("check4");
  }
}