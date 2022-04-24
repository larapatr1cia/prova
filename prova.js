function getMovieInfosOMDB(title){
    const url = `https://www.omdbapi.com/?t=${title}&apikey=790af7bc`  
       
    fetch(url)
    .then(response => response.json())
    .then(data => {

        if(data.Response == 'False'){
            descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
            descriptionBodyNotFound.style.marginBottom = '30px'
            movieTitle.textContent = "Titulo do filme"
            movieYear.textContent = "Ano"
            movieGenre.textContent = "Genero"
            movieRuntime.textContent = "Duração"
            imdbRating.textContent = "Score"
            movieInfo.textContent = "Descrição do filme."
            movieWriter.textContent = "Nome do escritor"
            movieDirector.textContent = "Nome do Diretor"
            moviePoster.style.backgroundImage = `url(filmeNaoEncontrado.png)`

        } else {
            descriptionBodyNotFound.textContent = "";
            
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            imdbRating.textContent = data.imdbRating
            movieInfo.textContent = data.Plot
            movieWriter.textContent = data.Writer
            movieDirector.textContent = data.Director
            moviePoster.style.backgroundImage = `url(${data.Poster})`
        }
        
        
     })  
}

var form = document.getElementById('formSearch');
var title = document.getElementById('title');

form.addEventListener('submit', function(e) {
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});