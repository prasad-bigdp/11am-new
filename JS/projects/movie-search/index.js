const mainDiv = document.getElementById("results")
const input = document.getElementById('inp');
const searchButton = document.getElementById('search');
const movieSearch = async () =>
{
    // fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=e980a8b4`)
    //     .then((res) => res.json())
    //     .then((data) => displayData(data.Search))
    //     .catch((err) => console.log(err))
    /* async await is a modern approach towards promises*/
    try
    {
        const res = await fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=e980a8b4`);
    const data = await res.json();
   displayData(data.Search)
    }
    catch (err)
    {
        console.log(err)
    }
    finally
    {
        console.log("hello world")
    }

}
searchButton.addEventListener("click", movieSearch)
const displayData = (movies) =>
{
    mainDiv.textContent = ''
    input.value=''
    movies.forEach((m) =>
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const movieImage = document.createElement('img');
        movieImage.src = m.Poster;
        movieImage.alt= m.Title
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = m.Title;
        movieDiv.append(movieImage, movieTitle);
        mainDiv.appendChild(movieDiv)
    })
}