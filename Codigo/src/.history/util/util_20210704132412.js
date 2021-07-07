window.onload = () => {
function check_is_logged(){
  
  if(localStorage.getItem('loggedId') != "null"){
    
    document.getElementById('login-menu').hidden = true;
    
    document.getElementById('logout-menu').hidden = false;
    
  }
}
}