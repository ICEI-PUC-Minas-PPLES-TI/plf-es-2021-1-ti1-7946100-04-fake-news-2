$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
  $('#direita').load('../reportar/direita.html');
  $('#esquerda').load('../reportar/esquerda.html');
});


function loadContent(filePath){
  
  $('#main').load(filePath);
}