var cadastro_bot = [];
$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
});

function save_cadastro_bot(){
  let nome = document.getElementById("nome_bot").value;
  let telefone = document.getElementById("telefone_bot").value;
  let categoria1 = document.getElementById("categoria1_bot").value;
  let categoria2 = document.getElementById("categoria2_bot").value;
  let categoria3 = document.getElementById("categoria3_bot").value;
  let categoria4 = document.getElementById("categoria4_bot").value;
  let aceito = document.getElementById("aceito").value;
  
  var values_json = { 
      'nome': nome,
      'telefone': telefone,
      'categoria1': categoria1,
      'categoria2': categoria2,
      'categoria3': categoria3,
      'categoria4': categoria4,
      'aceito': aceito
  }

  this.cadastro_bot.push(values_json);

  localStorage.setItem("cadastro_bot", JSON.stringify(cadastro_bot));
  
  alert("Número cadastrado com sucesso, você receberá as notícias assim que o bot estiver disponível!");
  this.clearFields();
}

function clearFields(){
  document.getElementById("nome_bot").value = "";
  document.getElementById("telefone_bot").value = "";
}