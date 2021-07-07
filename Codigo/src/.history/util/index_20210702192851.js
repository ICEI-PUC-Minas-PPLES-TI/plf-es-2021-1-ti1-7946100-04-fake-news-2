$(function() {
  $('#header').load('./header.html');
  $('#footer').load('./footer.html');
});

window.onload = () => {
  if(localStorage.getItem('loggedId') != null ){
    document.getElementById('login-menu').hidden = true;
    document.getElementById('logout-menu').hidden = false;
  }

  document.getElementById('logout-menu').addEventListener('click', () => {
    document.getElementById('logout-menu').hidden = true;
    localStorage.removeItem('loggedId');
  });
}