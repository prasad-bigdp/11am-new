// In this link https://official-joke-api.appspot.com/random_joke, a joke data
// is there we need to print
// let data={}
// function reqListener() {
//     console.log(this.responseText)
//     data = JSON.parse(this.responseText)
//     console.log(data)
// }


// function displayData ()
// {
    
// const req = new XMLHttpRequest()
// req.addEventListener("load", reqListener)
// req.open("GET", "https://official-joke-api.appspot.com/random_joke")
// req.send()
// 
// }
// document.getElementById('btn').addEventListener('click',displayData)



/* fetch will return promise*/
function myLogic ()
{
    fetch("https://official-joke-api.appspot.com/random_joke")
			.then((res) => res.json())
			.then((data) => {
				document.getElementById("setup").textContent = data.setup
				document.getElementById("punchline").textContent = data.punchline
			})
			.catch((err) => console.log(err))
}
document.getElementById('btn').addEventListener('click',myLogic)
















