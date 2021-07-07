function getHeaderAndFooter(){
    let content = "<div class=\"header\">\
    <div class=\"row logo\">\
      <p class=\"col-12\">TRUST NEWS</p>\
    </div>\
    <div class=\"row menu_area \">\
      <!--<input type=\"checkbox\" id=\"menuToggle\">\
    <label for=\"menuToggle\" class=\"menu-icon\">\
      <i class=\"fa fa-bars\"></i>\
      <i class=\"fa fa-times-circle\"></i>\
    </label>-->\
      <nav class=\"nav menu col-12\">\
        <a class=\"nav-link\" href=\"../util/header.html\">Inicio</a>\
        <a class=\"nav-link\" href=\"../destaques/index.html\">Destaques</a>\
        <a class=\"nav-link\" href=\"#bot_noticias\">Bot Noticias</a>\
        <a class=\"nav-link\" href=\"../reportar/list_fn.html\">Fake News</a>\
        <a class=\"nav-link\" href=\"../reportar/reportar_fn.html\">Reportar Fake News</a>\
        <a id=\"login-menu\" class=\"nav-link\" href=\"../login/index.html\">Login</a>\
        <a id=\"logout-menu\" class=\"nav-link\" href=\"../login/index.html\" hidden>Logout</a>\
      </nav>\
    </div>\
  </div>"

  document.getElementById("header").innerHTML= content
}