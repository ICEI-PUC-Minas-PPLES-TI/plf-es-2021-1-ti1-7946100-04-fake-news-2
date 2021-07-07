window.onload = () => {
function check_is_logged(){
  
  if(localStorage.getItem('loggedId') != "null"){
    
    alert("see")
    document.getElementById('login-menu').hidden = true;
    
    document.getElementById('logout-menu').hidden = false;
    
  }
}
}