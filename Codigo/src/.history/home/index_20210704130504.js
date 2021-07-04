$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
  $('#direita').load('../reportar/direita.html');
  $('#esquerda').load('../reportar/esquerda.html');
});

window.onload = () => {


  document.getElementById('logout-menu').addEventListener('click', () => {
    document.getElementById('logout-menu').hidden = true;
    localStorage.removeItem('loggedId');
  });
}

function loadContent(filePath){
  console.log(filePath);
  $('#main').load(filePath);
}