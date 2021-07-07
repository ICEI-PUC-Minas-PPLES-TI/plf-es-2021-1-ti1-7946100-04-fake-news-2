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

  this.content.push(values_json);

  localStorage.setItem(this.counter, JSON.stringify(values_json));
  this.counter++;
}