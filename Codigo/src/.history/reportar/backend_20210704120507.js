var content = [];
var counter = 0;
function getSite(){
    var busca = document.getElementById("search_bar").value;
    $("#list_table").html("");
    $("#list_table").html(
        "<tbody>"+
        "</tbody>"
        );
    for(var i = 0; i <= localStorage.length; i++){
        if(localStorage.getItem(i) !== null){
            var storage = JSON.parse(localStorage.getItem(i));
            if(
                storage.link.includes(busca) ||
                storage.titulo.includes(busca) ||
                storage.veiculo.includes(busca) ||
                storage.texto.includes(busca)
            ){
                $("#list_table").html(
        
                    "<tbody>"+
                    "</tbody>"
                    );
                for(var i = 0; i <= localStorage.length; i++){
                    if(localStorage.getItem(i) !== null){
                        var storage = JSON.parse(localStorage.getItem(i));
                        $("#list_table tbody").append("<tr style=\"border: none;>\"");
                        $("#list_table tbody").append("<td style=\"border: none; width: 8%;\"><img id=\"thumb_list"+i+"\" style=\"width: 50px;\"></img>  </td>");
                        $("#list_table tbody").append("<td style=\"border: none; width: 37%; text-align: start; padding-left: 10px;\"><div>"+storage.titulo+"</div><div class=\"gray_color\">"+storage.texto.substring(0,45)+"</div></td>");
                        $("#list_table tbody").append("<td style=\"border: none; width: 37%;\"><div class=\"gray_color\">"+storage.veiculo+"</div></td>");
                        $("#thumb_list"+i).attr("src", storage.thumb);
                        $("#list_table tbody").append("<td style=\"border: none; width: 9%;\"><i class=\"fa fa-trash-o\" onClick=\"trash_("+i+")\"></i></td>");
                    }
                }
        
            }
        }
    }

}

function trash(key){
    localStorage.removeItem(key);
    getSite();
}

function trash_(key){
    localStorage.removeItem(key);
    Listar_fn_usr();
}
function pencil(key){
    localStorage.setItem("to_edit", key);
    window.open("edit.html", "_self"); 
}

function edit(){
    let key = localStorage.getItem("to_edit");
    let to_edit = JSON.parse(localStorage.getItem(key));

    document.getElementById("link").value = to_edit.link;
    document.getElementById("titulo").value = to_edit.titulo;
    document.getElementById("texto").value = to_edit.texto;
    document.getElementById("veiculo").value = to_edit.veiculo;
    document.getElementById("isFake").checked = to_edit.checked;
    document.getElementById("assunto").value = to_edit.assunto;
    document.getElementById("motivo").value = to_edit.motivo;
    document.getElementById("revisado").value = to_edit.revisado;
    $(".imagearea")[0].firstChild.attributes.src.value = to_edit.thumb;
}


function save() {

    let link = document.getElementById("link").value;
    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;
    let veiculo = document.getElementById("veiculo").value;
    let fake = document.getElementById("isFake").checked;
    let assunto = "";//document.getElementById("assunto").checked;
    let motivo = "";//document.getElementById("motivo").checked;
    let thumb = $(".imagearea")[0].firstChild.attributes.src.value;
    let revisado = true;
    console.log(this.thumb_to_save);

    var values_json = {
        'link': link,
        'titulo': titulo, 
        'texto': texto, 
        'isFake': fake,
        'veiculo': veiculo,
        'thumb': thumb,
        'assunto': assunto,
        'motivo': motivo,
        'revisado': revisado
    }

    this.content.push(values_json);

    localStorage.setItem(this.counter, JSON.stringify(content));
    this.counter++;
    alert("Notícia salva com sucesso.");
    clearFields();
}

function save_report() {

    let link = document.getElementById("link").value;
    let titulo = "";//document.getElementById("titulo").value;
    let texto = ""; //document.getElementById("texto").value;
    let veiculo = "";//;document.getElementById("veiculo").value;
    let fake = "";//document.getElementById("isFake").checked;
    let assunto = document.getElementById("assunto").value;
    let motivo = document.getElementById("motivo").value;
    let thumb = $(".imagearea")[0].firstChild.attributes.src.value;
    let revisado = false;
    console.log(this.thumb_to_save);

    var values_json = {
        'link': link,
        'titulo': titulo, 
        'texto': texto, 
        'isFake': fake,
        'veiculo': veiculo,
        'thumb': thumb,
        'assunto': assunto,
        'motivo': motivo,
        'revisado': revisado
    }

    this.content.push(values_json);

    localStorage.setItem("noticias", JSON.stringify(content));
    this.counter++;
    alert("Notícia reportada, aguarde avaliação do administrador.");
    clearFields();
}

function saveOnEdit(){
    let key = localStorage.getItem("to_edit");

    let link = document.getElementById("link").value;
    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;
    let veiculo = document.getElementById("veiculo").value;
    let fake = document.getElementById("isFake").checked;
    let assunto = document.getElementById("assunto").value;
    let motivo = document.getElementById("motivo").value;
    let thumb = $(".imagearea")[0].firstChild.attributes.src.value;
    let revisado = true;

    var values_json = {
        'link': link,
        'titulo': titulo, 
        'texto': texto, 
        'isFake': fake,
        'veiculo': veiculo,
        'thumb': thumb,
        'assunto': assunto,
        'motivo': motivo,
        'revisado': revisado
    }

    localStorage.setItem(key, JSON.stringify(values_json));
    let tam = localStorage.length-1;
    localStorage.setItem("length",tam);
    alert("Notícia editada com sucesso.");
    clearFields();
}

function Listar(){
    $("#list_table").html(
        
        "<tbody>"+
        "</tbody>"
        );
    for(var i = 0; i <= localStorage.length; i++){
        if(localStorage.getItem(i) !== null){
            var storage = JSON.parse(localStorage.getItem(i));
            $("#list_table tbody").append("<tr style=\"border: none;>\"");
            $("#list_table tbody").append("<td style=\"border: none; width: 8%;\"><img id=\"thumb_list"+i+"\" style=\"width: 50px;\"></img>  </td>");
            $("#list_table tbody").append("<td style=\"border: none; width: 37%; text-align: start; padding-left: 10px;\"><div>"+storage.titulo+"</div><div class=\"gray_color\">"+storage.texto.substring(0,45)+"</div></td>");
            $("#list_table tbody").append("<td style=\"border: none; width: 37%;\"><div class=\"gray_color\">"+storage.veiculo+"</div></td>");
            $("#thumb_list"+i).attr("src", storage.thumb);
            $("#list_table tbody").append("<td style=\"border: none; width: 9%;\"><i class=\"fa fa-trash-o\" onClick=\"trash_("+i+")\"></i></td>");
        }
    }
}



function clearFields(){
    document.getElementById("link").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("texto").value = "";
    document.getElementById("veiculo").value = "";
    //document.getElementById("assunto").value = "";
    //document.getElementById("motivo").value = "";
    document.getElementById("isFake").checked = true;
    $(".imagearea")[0].firstChild.attributes.src.value = '';
}



$(document).ready(function(){
    var img = new Image();                
    img.src = localStorage.theImage;
  
    $('.imagearea').html(img);
    console.log("alow");
    $("body").on("change",".classhere",function(){
        
        var fileInput = $(this)[0];
        var file = fileInput.files[0];

        var reader = new FileReader();
        reader.onload = function(e) {
             var img = new Image();
             img.src = reader.result;
             $(".imagearea").html(img);
         }
  
         reader.readAsDataURL(file);
      });
  });


  function Listar_fn_usr(){
    $("#list_table").html(
        "<tbody>"+
        "</tbody>"
        );
    for(var i = 0; i <= localStorage.length; i++){
        if(localStorage.getItem(i) !== null){
            var storage = JSON.parse(localStorage.getItem(i));
            if(storage.revisado || localStorage.getItem('loggedId') != null){
                $("#list_table tbody").append("<tr style=\"border: none;>\"");
                $("#list_table tbody").append("<td style=\"border: none; width: 8%;\"><img id=\"thumb_list"+i+"\" style=\"width: 50px;\"></img>  </td>");
                $("#list_table tbody").append("<td style=\"border: none; width: 37%; text-align: start; padding-left: 10px;\"><div>"+storage.titulo+"</div><div class=\"gray_color\">"+storage.texto.substring(0,45)+"</div></td>");
                $("#list_table tbody").append("<td style=\"border: none; width: 37%;\"><div class=\"gray_color\">"+storage.veiculo+"</div></td>");
                $("#thumb_list"+i).attr("src", storage.thumb);
                if(localStorage.getItem('loggedId') != null){
                    $("#list_table tbody").append("<td style=\"border: none; width: 9%;\"><i class=\"fa fa-trash-o\" onClick=\"trash_("+i+")\"></i></td>");
                }
            }
        }
    }
}

function check_logged(){
    if(localStorage.getItem('loggedId') != null){
        document.getElementById("form_adm").style.display = "block";
        document.getElementById("form_not_adm").style.display = "none";
    }
}