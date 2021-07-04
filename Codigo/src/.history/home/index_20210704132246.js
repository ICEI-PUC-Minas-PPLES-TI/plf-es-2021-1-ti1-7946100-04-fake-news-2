$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
  $('#direita').load('../reportar/direita.html');
  $('#esquerda').load('../reportar/esquerda.html');
});

window.onload = function() {
//  if(localStorage.getItem('loggedId') != "null" ){
//    document.getElementById('logout-menu').hidden = false;
//    document.getElementById('login-menu').hidden = true;
//  }
//
//  document.getElementById('logout-menu').addEventListener('click', () => {
//    document.getElementById('logout-menu').hidden = true;
//    localStorage.removeItem('loggedId');
//  });
//function check_is_logged(){
  console.log("check");
  var hasElement = document.getElementById('login-menu');
  if(localStorage.getItem('loggedId') != "null"){
    console.log("check2");
    document.getElementById('login-menu').hidden = true;
    console.log("check3");
    document.getElementById('logout-menu').hidden = false;
    console.log("check4");
  }
//}
}

function loadContent(filePath){
  console.log(filePath);
  $('#main').load(filePath);
}
