const mainDiv = document.getElementById('mainDiv');

const movies = [
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_.jpg",
		Title: "KALKI",
		Link: "https://en.wikipedia.org/wiki/Kalki",
	},
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg",
		Title: "SALAAR",
		Link: "https://en.wikipedia.org/wiki/Kalki",
	},
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		Title: "KGF",
		Link: "https://en.wikipedia.org/wiki/Kalki",
	},
]


function displayData ()
{
    movies.forEach((m) =>
    {
           const div = document.createElement("div")
			div.classList.add("movie")
		 const ele = document.createElement("h1") //<h1></h1>
			ele.textContent = m.Title //<h1>Hello World</h1>

						/* create an anchor tag and add text "click me" and add to html div */
			const anchor = document.createElement("a")
			anchor.href = m.Link
			anchor.target = "_target"
			anchor.textContent = "click me"

						/* create image element and add src, alt and added to html */
			const image = document.createElement("img")
			image.src =m.imageLink
			image.alt = "KALKI"
			div.append(image, ele, anchor)
			mainDiv.appendChild(div)
    })

}
displayData()