function getMovieInfosOMDB(title){
    const url = `https://www.omdbapi.com/?t=${title}&apikey=790af7bc`
    let descriptionBody = document.querySelector("#descriptionBody")
    fetch(url) /*fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede*/
    .then(response => response.json()) /*O json()método da Responseinterface recebe um Responsefluxo e o lê até a conclusão. Ele retorna uma promessa que resolve com o resultado da análise do corpo do texto como JSON.*/
    .then(data => {

        if(data.Response == 'False'){
            descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
            descriptionBodyNotFound.style.marginBottom = '30px'
            descriptionBody.style.display = "none"
            moviePoster.style.backgroundImage = `url(filmeNaoEncontrado.png)`}
        
        else { /*Se não, vai exibir as informações do filme como titulo, genero, diretor etc */
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

var form = document.getElementById('formSearch'); /*Declara as variaveis do formulario */
var title = document.getElementById('title');

form.addEventListener('submit', function(e) { /*Registra uma única espera de evento em um único alvo */
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});
