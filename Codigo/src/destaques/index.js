async function callApiNews() {
  let response = await fetch("https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=2a7a0f9d7ba642fb86f6ca8438f56cb0");
  //let response = await fetch("../news.json");
  let data = await response.json();
  return data;
}

function loadNews() {
  
  callApiNews().then(data => {
    const noticias = data.articles;
    let central = document.querySelector('.central');  
    Object.keys(noticias).forEach( function(key, value) {
      let noticia = document.createElement('div');
      let imagem = document.createElement('div');
      let thumbnail = document.createElement('img');
      let corpo = document.createElement('div');
      let tituloNoticia = document.createElement('h4');
      let textoNoticia = document.createElement('p');
      let data = document.createElement('p');
      
      thumbnail.src = noticias[key].urlToImage;;
      thumbnail.addEventListener("click", () => {
        window.open(
          noticias[key].url,
          '_blank'
        ); 
      })
      imagem.classList.add('col-12', 'col-sm-12', 'col-md-12', 'col-lg-4');
      imagem.appendChild(thumbnail);

      corpo.classList.add('col-12', 'col-sm-12', 'col-md-12', 'col-lg-7','corpo');
      tituloNoticia.innerHTML = noticias[key].title;
      textoNoticia.innerHTML = noticias[key].content;
      data.innerHTML = new Date(noticias[key].publishedAt).toUTCString();
      corpo.appendChild(tituloNoticia);
      corpo.appendChild(textoNoticia);
      corpo.appendChild(data);

      

      noticia.classList.add('noticia', 'row');
      noticia.appendChild(imagem);
      noticia.appendChild(corpo);
      noticia.appendChild(data);

      central.appendChild(noticia);
      central.appendChild(document.createElement("HR"));
    })
  })
}

$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');

  $('#direita').load('../reportar/direita.html');
  $('#esquerda').load('../reportar/esquerda.html');
});

window.onload = () => {
  loadNews();
}
