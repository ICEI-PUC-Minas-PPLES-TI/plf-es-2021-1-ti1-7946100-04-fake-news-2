window.onload = () => {
function check_is_logged(){
  console.log("check");
  if(localStorage.getItem('loggedId') != "null"){
    console.log("check2");
    alert("see")
    document.getElementById('login-menu').hidden = true;
    console.log("check3");
    document.getElementById('logout-menu').hidden = false;
    console.log("check4");
  }
}
}