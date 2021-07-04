var cadastro_bot = [];
$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
});

function save_cadastro_bot(){
  let nome = document.getElementById("nome_bot").value;
  let telefone = document.getElementById("telefone_bot").value;
  
  var values_json = { 
      'nome': nome,
      'telefone': telefone
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