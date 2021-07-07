$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
  $('#direita').load('../reportar/direita.html');
  $('#esquerda').load('../reportar/esquerda.html');
});

window.onload = () => {
//  if(localStorage.getItem('loggedId') != "null" ){
//    document.getElementById('logout-menu').hidden = false;
//    document.getElementById('login-menu').hidden = true;
//  }
//
//  document.getElementById('logout-menu').addEventListener('click', () => {
//    document.getElementById('logout-menu').hidden = true;
//    localStorage.removeItem('loggedId');
//  });

  if(localStorage.getItem('loggedId') != "null"){
    document.getElementById('login-menu').hidden = true;
    document.getElementById('logout-menu').hidden = false;
  }
}

function loadContent(filePath){
  
  $('#main').load(filePath);
}
