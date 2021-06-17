async function callApiNews() {
  let response = await fetch("https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=2a7a0f9d7ba642fb86f6ca8438f56cb0");
  let data = await response.json();
  return data;
}

function loadNews() {
  
  callApiNews().then(data => {
    const noticias = data.articles;
  
    let central = document.querySelector('.central');  
    Object.keys(noticias).forEach( function(key, value) {
      let noticia = document.createElement('div');
      let thumbnail = document.createElement('img');
      let corpo = document.createElement('div');
      let tituloNoticia = document.createElement('h4');
      let textoNoticia = document.createElement('p');
      
      thumbnail.classList.add('col-4');
      thumbnail.src = noticias[key].urlToImage;;
      thumbnail.addEventListener("click", () => {
        window.open(
          noticias[key].url,
          '_blank'
        ); 
      })

      corpo.classList.add('col-7', 'corpo');
      tituloNoticia.innerHTML = noticias[key].title;
      textoNoticia.innerHTML = noticias[key].content;
      corpo.appendChild(tituloNoticia);
      corpo.appendChild(textoNoticia);

      noticia.classList.add('noticia', 'row');
      noticia.appendChild(thumbnail);
      noticia.appendChild(corpo);

      central.appendChild(noticia);
      central.appendChild(document.createElement("HR"));
    })
  })
}

$(function() {
  $('#header').load('../util/header.html');
  $('#footer').load('../util/footer.html');
});

window.onload = () => {
  loadNews();
}
