const mainDiv = document.getElementById("movies")
const titleInp = document.getElementById("title")
const imageInp = document.getElementById("image")
const linkInp = document.getElementById("link");
const movies=[]
function inputLogic (e)
{
    e.preventDefault();
    const newMovies = {
        Title: titleInp.value,
        imageLink: imageInp.value,
        link: linkInp.value,
    }
    movies.push(newMovies);
    titleInp.value = '';
    imageInp.value = '';
    linkInp.value=''
    displayMovies(movies)
}
function displayMovies (data)
{
    mainDiv.textContent=''
    data.forEach((m) =>
    {
        const moviediv = document.createElement('div');
        moviediv.classList.add('movie')
        const title = document.createElement('h2');
        title.textContent = m.Title;
        const image = document.createElement('img');
        image.src = m.imageLink;
        image.alt = m.Title;
        const link = document.createElement('a');
        link.href = m.link;
        link.target="_blank"
        moviediv.append(title, image, link);
        mainDiv.appendChild(moviediv)
    })
}